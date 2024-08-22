import React, { useEffect } from 'react'
import TeacherCard from '../hooks/TeacherCard'
import supabase from '../database/supabase'

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
export default function TeacherBoard() {
  const [teacherData, setTeacherData] = React.useState<teacherCardInfo[]>([])

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
      fetchArea(titulos[0].areaestudio, newTeacher)
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
      trabajos.forEach((trabajo) => fetchEmpresa(trabajo.empresa, newTeacher))
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
      fetchRecepcion(resumes[0].recepcion, newTeacher)
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
    })
  }, [])

  return (
    <section className="flex flex-wrap justify-center gap-10">
      {teacherData.map((teacher) => {
        return <TeacherCard key={teacher.documentoid} teacher={teacher} />
      })}
    </section>
  )
}
