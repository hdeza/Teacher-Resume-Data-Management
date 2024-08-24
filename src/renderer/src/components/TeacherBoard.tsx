import React, { useEffect } from 'react'
import TeacherCard from '../hooks/TeacherCard'
import supabase from '../database/supabase'
import Skeleton from '@mui/material/Skeleton'
import { jsPDF } from 'jspdf'
interface teacherCardInfo {
  documentoid: string | undefined
  nombre: string | undefined
  apellido: string | undefined
  fechanacimiento: string | undefined
  tiempoexperiencia: number | undefined
  observaciongeneral: string | undefined
  recomendado: string | undefined
  datosimportantes: string | undefined
  ciudad: string | undefined
  area: string | undefined
  empresa: string | undefined
  fechaEntrevista: string | undefined
  observacionEntrevista: string | undefined
  fecharecepcion: string | undefined
  tiporecepcion: string | undefined
  telefono: string | undefined
  titulo: string | undefined
  universidad: string | undefined
  cvlink: string | undefined
}
export default function TeacherBoard({
  teacherName,
  teacherReception,
  teacherUniversity,
  teacherArea,
  teacherDegree,
  teacherCity,
  teacherRecommended,
  downloadPdf,
  setDownloadPdf
}: {
  teacherName: string
  teacherReception: string
  teacherUniversity: string
  teacherArea: string
  teacherDegree: string
  teacherCity: string
  teacherRecommended: string
  downloadPdf: boolean
  setDownloadPdf: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [teacherData, setTeacherData] = React.useState<teacherCardInfo[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  let teacherPdf: teacherCardInfo[] = [] // aqui se guardará los docentes de los resultados del filtrado

  async function fetchEntrevista(dni: string, newTeacher: teacherCardInfo) {
    let { data: entrevista, error } = await supabase
      .from('entrevistas')
      .select('*')
      .eq('docente', dni)
    if (error) {
      console.error(error)
    } else if (entrevista) {
      newTeacher.fechaEntrevista = entrevista[0].fecha
      newTeacher.observacionEntrevista = entrevista[0].observacionentrevista
    }
  }

  async function fetchCiudad(idCiudad: string, newTeacher: teacherCardInfo) {
    let { data: ciudades, error } = await supabase
      .from('ciudades')
      .select('*')
      .eq('idciudad', idCiudad)
    if (error) {
      console.error(error)
    } else if (ciudades) {
      newTeacher.ciudad = ciudades[0].nombre
    }
  }

  async function fetchTelefono(dni: string, newTeacher: teacherCardInfo) {
    let { data: telefonos, error } = await supabase.from('telefonos').select('*').eq('docente', dni)
    if (error) {
      console.error(error)
    } else if (telefonos) {
      newTeacher.telefono = telefonos[0].numerotel
    }
  }

  async function fetchArea(idArea: string, newTeacher: teacherCardInfo) {
    let { data: areas, error } = await supabase.from('areas').select('*').eq('idarea', idArea)
    if (error) {
      console.error(error)
    } else if (areas) {
      newTeacher.area = areas[0].nombre
    }
  }

  async function fetchTitulo(idTitulo: string, newTeacher: teacherCardInfo) {
    let { data: titulos, error } = await supabase
      .from('titulos')
      .select('*')
      .eq('idtitulo', idTitulo)
    if (error) {
      console.error(error)
    } else if (titulos) {
      newTeacher.titulo = titulos[0].nombre
      await fetchArea(titulos[0].areaestudio, newTeacher)
      newTeacher.universidad = titulos[0].universidad
    }
  }

  async function fetchEstudio(dni: string, newTeacher: teacherCardInfo) {
    let { data: estudios, error } = await supabase.from('estudios').select('*').eq('docente', dni)
    if (error) {
      console.error(error)
    } else if (estudios) {
      estudios.forEach((estudio) => fetchTitulo(estudio.titulo, newTeacher))
    }
  }

  async function fetchEmpresa(idEmpresa: string, newTeacher: teacherCardInfo) {
    let { data: empresas, error } = await supabase
      .from('empresas')
      .select('*')
      .eq('idempresa', idEmpresa)
    if (error) {
      console.error(error)
    } else if (empresas) {
      newTeacher.empresa = empresas[0].nombre
    }
  }

  async function fetchTrabajo(dni: string, newTeacher: teacherCardInfo) {
    let { data: trabajos, error } = await supabase.from('trabajos').select('*').eq('docente', dni)
    if (error) {
      console.error(error)
    } else if (trabajos) {
      trabajos.forEach(async (trabajo) => await fetchEmpresa(trabajo.empresa, newTeacher))
    }
  }

  async function fetchRecepcion(idTipoRecepcion: string, newTeacher: teacherCardInfo) {
    let { data: tiposRecepcion, error } = await supabase
      .from('tiposrecepcion')
      .select('*')
      .eq('idtiporecepcion', idTipoRecepcion)
    if (error) {
      console.error(error)
    } else if (tiposRecepcion) {
      newTeacher.tiporecepcion = tiposRecepcion[0].nombre
    }
  }

  async function fetchResume(dni: string, newTeacher: teacherCardInfo) {
    let { data: resumes, error } = await supabase.from('resumes').select('*').eq('docente', dni)
    if (error) {
      console.error(error)
    } else if (resumes) {
      newTeacher.fecharecepcion = resumes[0].fecharecepcion
      newTeacher.cvlink = resumes[0].cvlink
      await fetchRecepcion(resumes[0].recepcion, newTeacher)
    }
  }

  async function fetchTeacher() {
    let { data: docentes, error } = await supabase.from('docentes').select('*')
    if (error) {
      console.error(error)
      return
    } else if (docentes) {
      // console.log(docentes)
      //ahora vamos a leer docente por docente toda la informacion pertinente
      const teacherPromises = docentes.map(async (teacher) => {
        // aqui mapeamos los datos de docentes
        // para cada teacher creamos la constante newTeacher que almacenara todos los datos correspondientes
        const newTeacher: teacherCardInfo = {
          documentoid: teacher.documentoid,
          nombre: teacher.nombre,
          apellido: teacher.apellido,
          fechanacimiento: teacher.fechanacimiento,
          tiempoexperiencia: teacher.tiempoexperiencia,
          observaciongeneral: teacher.observaciongeneral,
          recomendado: teacher.recomendado,
          datosimportantes: teacher.datosimportantes,
          ciudad: undefined,
          area: undefined,
          empresa: undefined,
          fechaEntrevista: undefined,
          observacionEntrevista: undefined,
          fecharecepcion: undefined,
          tiporecepcion: undefined,
          telefono: undefined,
          titulo: undefined,
          universidad: undefined,
          cvlink: undefined
        }
        // Hacemos un await para cada fetch para darle el tiempo de completar cada fetch antes de hacer el otro y traer
        // toda la información de la base de datos
        await fetchEntrevista(teacher.documentoid, newTeacher)
        await fetchCiudad(teacher.ciudad, newTeacher)
        await fetchTelefono(teacher.documentoid, newTeacher)
        await fetchEstudio(teacher.documentoid, newTeacher)
        await fetchTrabajo(teacher.documentoid, newTeacher)
        await fetchResume(teacher.documentoid, newTeacher)
        // Al finalizar los fetch retornamos el newTeacher y esto hará que teacherPromises sea un lista de docentes
        return newTeacher
      })

      const teacherInfo = await Promise.all(teacherPromises)
      setTeacherData(teacherInfo)
    }
  }

  useEffect(() => {
    fetchTeacher().then(() => {
      console.log('Teacher data fetched')
      console.log(teacherData)
      setIsLoading(false) // Indicamos que la carga de datos ha finalizado y el componente puede renderizarse en pantalla.
    })
  }, [])

  function capitalizeWords(text) {
    return text.replace(
      /\b\w+/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
  }

  function formatTeacherData(teacher) {
    return {
      ...teacher,
      nombre: capitalizeWords(teacher.nombre || ''),
      apellido: capitalizeWords(teacher.apellido || ''),
      ciudad: capitalizeWords(teacher.ciudad || ''),
      area: capitalizeWords(teacher.area || ''),
      empresa: capitalizeWords(teacher.empresa || ''),
      tiporecepcion: capitalizeWords(teacher.tiporecepcion || ''),
      telefono: capitalizeWords(teacher.telefono || ''),
      titulo: capitalizeWords(teacher.titulo || ''),
      universidad: capitalizeWords(teacher.universidad || ''),
      // Deja las observaciones tal como están
      observaciongeneral: teacher.observaciongeneral,
      datosimportantes: teacher.datosimportantes,
      observacionEntrevista: teacher.observacionEntrevista
    }
  }

  useEffect(() => {
    if (downloadPdf) {
      const generatePDF = (teacherData: teacherCardInfo[]) => {
        const doc = new jsPDF()
        const margin = 15
        const lineHeight = 8
        const pageWidth = doc.internal.pageSize.width
        const contentWidth = pageWidth - margin * 2
        let yOffset = margin

        teacherData.forEach((teacher, index) => {
          if (index > 0) {
            doc.addPage()
            yOffset = margin
          }

          // Nombre
          doc.setFontSize(20)
          doc.setFont('helvetica', 'bold')
          doc.text(`${teacher.nombre} ${teacher.apellido}`, margin, yOffset)
          yOffset += lineHeight - 3

          doc.setLineWidth(0.5)
          doc.line(margin, yOffset, pageWidth - margin, yOffset) // Línea separadora
          yOffset += lineHeight

          // Información Personal
          doc.setFontSize(14)
          doc.setFont('helvetica', 'bold')
          doc.text('Información Personal:', margin, yOffset)
          yOffset += lineHeight

          doc.setFont('helvetica', 'normal')
          doc.text(`Documento de ID: ${teacher.documentoid || 'N/A'}`, margin, yOffset)
          yOffset += lineHeight

          doc.text(`Fecha de Nacimiento: ${teacher.fechanacimiento || 'N/A'}`, margin, yOffset)
          yOffset += lineHeight

          doc.text(`Ciudad: ${teacher.ciudad || 'N/A'}`, margin, yOffset)
          yOffset += lineHeight

          doc.text(`Teléfono: ${teacher.telefono || 'N/A'}`, margin, yOffset)
          yOffset += lineHeight

          yOffset += 5 // Espacio extra entre secciones

          // Experiencia y Observaciones
          doc.setFont('helvetica', 'bold')
          doc.text('Experiencia y Observaciones:', margin, yOffset)
          yOffset += lineHeight

          doc.setFont('helvetica', 'normal')
          doc.text(`Tiempo de Experiencia: ${teacher.tiempoexperiencia || 0} años`, margin, yOffset)
          yOffset += lineHeight

          doc.text(`Observación General:`, margin, yOffset)
          yOffset += lineHeight

          const observationLines = doc.splitTextToSize(
            teacher.observaciongeneral || 'N/A',
            contentWidth
          )
          doc.text(observationLines, margin, yOffset)
          yOffset += observationLines.length * lineHeight

          doc.text(`Datos Importantes:`, margin, yOffset)
          yOffset += lineHeight

          const importantDataLines = doc.splitTextToSize(
            teacher.datosimportantes || 'N/A',
            contentWidth
          )
          doc.text(importantDataLines, margin, yOffset)
          yOffset += importantDataLines.length * lineHeight

          doc.setFont('helvetica', 'normal')
          doc.text(`Recomendado por: ${teacher.recomendado || 'N/A'}`, margin, yOffset)
          yOffset += lineHeight

          yOffset += 5 // Espacio extra entre secciones

          // Información Académica
          doc.setFont('helvetica', 'bold')
          doc.text('Información Académica:', margin, yOffset)
          yOffset += lineHeight

          doc.setFont('helvetica', 'normal')
          doc.text(`Título: ${teacher.titulo || 'N/A'}`, margin, yOffset)
          yOffset += lineHeight

          doc.text(`Area: ${teacher.area || 'N/A'}`, margin, yOffset)
          yOffset += lineHeight

          doc.text(`Universidad: ${teacher.universidad || 'N/A'}`, margin, yOffset)
          yOffset += lineHeight

          yOffset += 5 // Espacio extra entre secciones

          // Información de la Entrevista
          doc.setFont('helvetica', 'bold')
          doc.text('Información de la Entrevista:', margin, yOffset)
          yOffset += lineHeight

          doc.setFont('helvetica', 'normal')
          doc.text(`Fecha de Entrevista: ${teacher.fechaEntrevista || 'N/A'}`, margin, yOffset)
          yOffset += lineHeight

          const interviewObservationLines = doc.splitTextToSize(
            teacher.observacionEntrevista || 'N/A',
            contentWidth
          )
          doc.text(`Observación Entrevista:`, margin, yOffset)
          yOffset += lineHeight
          doc.text(interviewObservationLines, margin, yOffset)
          yOffset += interviewObservationLines.length * lineHeight

          doc.text(`Tipo de Recepción: ${teacher.tiporecepcion || 'N/A'}`, margin, yOffset)
          yOffset += lineHeight

          doc.text(`Fecha de Recepción: ${teacher.fecharecepcion || 'N/A'}`, margin, yOffset)
          yOffset += lineHeight
        })

        doc.save('Informacion_Docentes.pdf')
        setDownloadPdf(false)
      }
      const formattedTeacherData = teacherPdf.map((teacher) => formatTeacherData(teacher))

      generatePDF(formattedTeacherData)
    }
  }, [downloadPdf])

  return (
    <section className="flex flex-wrap justify-center gap-10">
      {isLoading
        ? Array.from(new Array(16)).map((_, index) => (
            <div key={index} className="max-w-md p-7 border-2 rounded">
              <div className="flex mb-1">
                <Skeleton variant="circular" width={50} height={50} animation="wave" />
                <Skeleton
                  className="ml-2"
                  variant="text"
                  width={200}
                  height={50}
                  animation="wave"
                />
              </div>
              <Skeleton variant="rounded" width={260} height={150} animation="wave" />
              <div className="flex mt-2 justify-between">
                <Skeleton variant="rounded" width={120} height={40} animation="wave" />
                <Skeleton variant="rounded" width={120} height={40} animation="wave" />
              </div>
            </div>
          ))
        : teacherData.map((teacher) => {
            if (teacherName !== '') {
              if (
                teacher.nombre?.toLowerCase().includes(teacherName.toLowerCase()) ||
                teacher.apellido?.toLowerCase().includes(teacherName.toLowerCase())
              ) {
                return <TeacherCard key={teacher.documentoid} teacher={teacher} />
              }
            } else if (
              teacherArea ||
              teacherReception ||
              teacherUniversity ||
              teacherDegree ||
              teacherCity ||
              teacherRecommended
            ) {
              // Filtrar los docentes basados en los criterios seleccionados
              const criteria = [
                // aqui guardo las variables a comprobar y las variables que tiene el docente que se está leyendo
                { value: teacherArea, field: teacher.area?.toLowerCase() },
                { value: teacherReception, field: teacher.fecharecepcion?.toLowerCase() },
                { value: teacherUniversity, field: teacher.universidad?.toLowerCase() },
                { value: teacherDegree, field: teacher.titulo?.toLowerCase() },
                { value: teacherCity, field: teacher.ciudad?.toLowerCase() },
                { value: teacherRecommended, field: teacher.recomendado?.toLowerCase() }
              ]
              // Comprobar si el docente cumple con todos los criterios de búsqueda.
              const matchesAllCriteria = criteria.every((criterion) => {
                return !criterion.value || criterion.field?.includes(criterion.value.toLowerCase())
              })
              // Si el docente cumple con todos los criterios, lo renderiza.
              if (matchesAllCriteria) {
                teacherPdf.push(teacher)
                return <TeacherCard key={teacher.documentoid} teacher={teacher} />
              }
            } else {
              teacherPdf.push(teacher)
              return <TeacherCard key={teacher.documentoid} teacher={teacher} />
            }
          })}
    </section>
  )
}
