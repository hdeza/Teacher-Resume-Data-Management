import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import PageOneAdd from '../components/addTeacher/PageOneAdd'
import PageTwoAdd from '../components/addTeacher/PageTwoAdd'
import PageThreeAdd from '../components/addTeacher/PageThreeAdd'
import supabase from '../database/supabase'

export default function AddTeacher() {
  const [open, setOpen] = React.useState(false)
  const [page, setPage] = React.useState(1)

  // Status variables for teacher data
  const [name, setName] = React.useState('')
  const [surName, setSurName] = React.useState('')
  const [dni, setDni] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [degree, setDegree] = React.useState('')
  const [graduationDate, setGraduationDate] = React.useState('')
  const [university, setUniversity] = React.useState('')
  const [year, setYear] = React.useState('')
  const [enterprises, setEnterprises] = React.useState('')
  const [experience, setExperience] = React.useState('')
  const [area, setArea] = React.useState('')
  const [receiptDate, setReceiptDate] = React.useState('')
  const [typeReceipt, setTypeReceipt] = React.useState('')
  const [recommendedBy, setRecommendedBy] = React.useState('')
  const [importantFacts, setImportantFacts] = React.useState('')
  const [generalRemarks, setGeneralRemarks] = React.useState('')
  const [interviewDate, setInterviewDate] = React.useState('')
  const [interviewObservations, setInterviewObservations] = React.useState('')
  const [cvLink, setCVLink] = React.useState('')
  const [city, setCity] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setName('')
    setSurName('')
    setDni('')
    setPhone('')
    setDegree('')
    setPhone('')
    setGraduationDate('')
    setUniversity('')
    setYear('')
    setEnterprises('')
    setExperience('')
    setArea('')
    setTypeReceipt('')
    setRecommendedBy('')
    setImportantFacts('')
    setGeneralRemarks('')
    setInterviewDate('')
    setInterviewObservations('')
    setCVLink('')
    setPage(1)
    setCity('')
    setReceiptDate('')
  }

  const handlePage = (event, value) => {
    setPage(value)
  }

  const selectPage = () => {
    switch (page) {
      case 1:
        return (
          <PageOneAdd
            name={name}
            setName={setName}
            surName={surName}
            setSurName={setSurName}
            dni={dni}
            setDni={setDni}
            degree={degree}
            setDegree={setDegree}
            phone={phone}
            setPhone={setPhone}
            university={university}
            setUniversity={setUniversity}
            graduationDate={graduationDate}
            setGraduationDate={setGraduationDate}
            city={city}
            setCity={setCity}
          />
        )
      case 2:
        return (
          <PageTwoAdd
            area={area}
            setArea={setArea}
            enterprises={enterprises}
            setEnterprises={setEnterprises}
            experience={experience}
            setExperience={setExperience}
            receiptDate={receiptDate}
            setReceiptDate={setReceiptDate}
            year={year}
            setYear={setYear}
            typeReceipt={typeReceipt}
            setTypeReceipt={setTypeReceipt}
            interviewDate={interviewDate}
            setInterviewDate={setInterviewDate}
          />
        )
      case 3:
        return (
          <PageThreeAdd
            cvLink={cvLink}
            setCVLink={setCVLink}
            generalRemarks={generalRemarks}
            setGeneralRemarks={setGeneralRemarks}
            importantFacts={importantFacts}
            setImportantFacts={setImportantFacts}
            interviewObservations={interviewObservations}
            setInterviewObservations={setInterviewObservations}
            recommendedBy={recommendedBy}
            setRecommendedBy={setRecommendedBy}
            handleSubmit={handleSubmit}
          />
        )
    }
  }

  // funciones para ingreso de datos

  // Estas son las variables que guardaran los id de las instancias en la base de datos para poder relacionarlas
  let idCity
  let idArea
  let idDegree
  let idTypeReceipt
  let idEnterprise

  // TODO: Validar los datos antes de enviarlo

  const addAreas = async () => {
    const checkArea = async (area: string) => {
      let { data: dataArea, error } = await supabase
        .from('areas')
        .select('idarea')
        .eq('nombre', area) // traemos de la base de datos el id donde el nombre es igual al area
      if (error) {
        if (error.code === 'PGRST116') {
          // El error PGRST116 indica que no se encontró ningún registro
          return false
        }
        console.error('Error fetching area check:', error)
        return false
      } else {
        // Asegúrate de que dataArea es un array y tiene al menos un elemento
        if (dataArea && Array.isArray(dataArea) && dataArea.length > 0) {
          // si existe algun dato (diferente de nulo)
          idArea = dataArea[0].idarea // se obtiene el id del area existente
          return true // esto quiere decir que si existe esa area dentro de la base de datos
        } else {
          return false // esto quiere decir que no existe esta area en la base de datos
        }
      }
    }

    const areaExists = await checkArea(area) // creamos esta instancia que va guardar TRUE o FALSE

    if (!areaExists) {
      // Si no exite el area ingresada en la base de datos entonces la agregamos
      const { data, error } = await supabase
        .from('areas')
        .insert([{ nombre: area }])
        .select() // insertamos el dato correpondiente en la tabla
      if (error) {
        console.error('Error fetching areas:', error)
      } else {
        console.log('Areas added successfully')
        idArea = data[0].idarea // se obtiene el id del area añadida
      }
    }
  }

  const addUniversity = async () => {
    const checkUniversity = async (university: string) => {
      const { data, error } = await supabase
        .from('universidades')
        .select('nombre')
        .eq('nombre', university)
      if (error) {
        if (error.code === 'PGRST116') {
          // El error PGRST116 indica que no se encontró ningún registro
          return false
        }
        console.error('Error fetching university check:', error)
        return false
      } else {
        if (data && Array.isArray(data) && data.length > 0) {
          return true
        } else {
          return false
        }
      }
    }

    const universityExists = await checkUniversity(university)

    if (!universityExists) {
      const { data, error } = await supabase
        .from('universidades')
        .insert([{ nombre: university }])
        .select()
      if (error) {
        console.error('Error fetching university:', error)
      } else {
        console.log('University added successfully')
      }
    }
  }

  // Ingreso de Ciudades
  const addCity = async () => {
    const checkCity = async (city: string) => {
      const { data, error } = await supabase.from('ciudades').select('idciudad').eq('nombre', city)
      if (error) {
        if (error.code === 'PGRST116') {
          // El error PGRST116 indica que no se encontró ningún registro
          return false
        }
        console.error('Error fetching city check:', error)
        return false
      } else {
        if (data && Array.isArray(data) && data.length > 0) {
          idCity = data[0].idciudad
          return true
        } else {
          return false
        }
      }
    }

    const cityExists = await checkCity(city)

    if (!cityExists) {
      const { data, error } = await supabase
        .from('ciudades')
        .insert([{ nombre: city }]) // se inserta el nombre de la ciudad del docente
        .select()
      if (error) {
        console.error('Error fetching cities:', error)
      } else {
        console.log('Cities added successfully')
        idCity = data[0].idciudad // se obtiene el id de la ciudad
      }
    }
  }
  // Ingreso de Docente
  const addTeacher = async () => {
    const checkTeacher = async (dni: string) => {
      const { data, error } = await supabase
        .from('docentes')
        .select('documentoid')
        .eq('documentoid', dni)
      if (error) {
        if (error.code === 'PGRST116') {
          // El error PGRST116 indica que no se encontró ningún registro
          return false
        }
        console.error('Error fetching teacher check:', error)
        return false
      } else {
        if (data && Array.isArray(data) && data.length > 0) {
          return true
        } else {
          return false
        }
      }
    }

    const teacherExists = await checkTeacher(dni)

    if (!teacherExists) {
      const { data, error } = await supabase
        .from('docentes')
        .insert([
          {
            documentoid: dni,
            nombre: name,
            apellido: surName,
            fechanacimiento: year,
            tiempoexperiencia: experience,
            observaciongeneral: generalRemarks,
            recomendado: recommendedBy,
            datosimportantes: importantFacts,
            ciudad: idCity // aqui se ingresa el id de la ciudad
          }
        ])
        .select()
      if (error) {
        console.error('Error adding teacher:', error)
      } else {
        console.log('Teacher added successfully')
      }
    } else {
      //TODO: error docente ya existe
      console.log('El docente ya existe en la base de datos.')
    }
  }

  const addDregree = async () => {
    const checkDregree = async (degree: string, university: string) => {
      const { data, error } = await supabase
        .from('titulos')
        .select('idtitulo')
        .eq('nombre', degree)
        .eq('universidad', university)
      if (error) {
        if (error.code === 'PGRST116') {
          // El error PGRST116 indica que no se encontró ningún registro
          return false
        }
        console.error('Error fetching degree check:', error)
        return false
      } else {
        if (data && Array.isArray(data) && data.length > 0) {
          idDegree = data[0].idtitulo // se obtiene el id del grado
          return true
        } else {
          return false
        }
      }
    }
    const degreeExists = await checkDregree(degree, university)
    if (!degreeExists) {
      const { data, error } = await supabase
        .from('titulos')
        .insert([{ nombre: degree, areaestudio: idArea, universidad: university }])
        .select()
      if (error) {
        console.error('Error fetching degree:', error)
      } else {
        console.log('Degree added successfully')
        idDegree = data[0].idtitulo // se obtiene el id del título
      }
    }
  }

  const addStudies = async () => {
    const { data, error } = await supabase
      .from('estudios')
      .insert([{ docente: dni, titulo: idDegree, fecha: graduationDate }])
      .select()
    if (error) {
      console.error('Error fetching studies:', error)
    } else {
      console.log('Studies added successfully')
    }
  }

  const addPhone = async () => {
    const checkPhone = async (phone: string) => {
      const { data, error } = await supabase
        .from('telefonos')
        .select('numerotel')
        .eq('numerotel', phone)
      if (error) {
        if (error.code === 'PGRST116') {
          // El error PGRST116 indica que no se encontró ningún registro
          return false
        }
        console.error('Error fetching phone check:', error)
        return false
      } else {
        if (data && Array.isArray(data) && data.length > 0) {
          return true
        } else {
          return false
        }
      }
    }

    const phoneExists = await checkPhone(phone)
    if (!phoneExists) {
      const { data, error } = await supabase
        .from('telefonos')
        .insert([{ numerotel: phone, docente: dni }])
        .select()
      if (error) {
        console.error('Error fetching phone:', error)
      } else {
        console.log('Phone added successfully')
      }
    }
  }

  const addTypeReceipt = async () => {
    const checkTypeReceipt = async (type: string) => {
      const { data, error } = await supabase
        .from('tiposrecepcion')
        .select('idtiporecepcion')
        .eq('nombre', type)
      if (error) {
        if (error.code === 'PGRST116') {
          // El error PGRST116 indica que no se encontró ningún registro
          return false
        }
        console.error('Error fetching type receipt check:', error)
        return false
      } else {
        if (data && Array.isArray(data) && data.length > 0) {
          idTypeReceipt = data[0].idtiporecepcion
          return true
        } else {
          return false
        }
      }
    }
    const typeReceiptExists = await checkTypeReceipt(typeReceipt)
    if (!typeReceiptExists) {
      const { data, error } = await supabase
        .from('tiposrecepcion')
        .insert([{ nombre: typeReceipt }])
        .select()
      if (error) {
        console.error('Error fetching type receipt:', error)
      } else {
        console.log('Type receipt added successfully')
        idTypeReceipt = data[0].idtiporecepcion // guardamos el id del tipo de recepcion agregado
      }
    }
  }

  const addCv = async () => {
    const { data, error } = await supabase
      .from('resumes')
      .insert([
        { docente: dni, fecharecepcion: receiptDate, recepcion: idTypeReceipt, cvlink: cvLink }
      ])
      .select()
    if (error) {
      console.error('Error fetching cv:', error)
    } else {
      console.log('CV added successfully')
    }
  }

  const addInterview = async () => {
    const { data, error } = await supabase
      .from('entrevistas')
      .insert([
        { fecha: interviewDate, observacionentrevista: interviewObservations, docente: dni }
      ])
      .select()
    if (error) {
      console.error('Error fetching interview:', error)
    } else {
      console.log('Interview added successfully')
    }
  }

  const addEnterprise = async () => {
    const checkEnterprise = async (enterprise: string) => {
      const { data, error } = await supabase
        .from('empresas')
        .select('idempresa')
        .eq('nombre', enterprise)
      if (error) {
        if (error.code === 'PGRST116') {
          // El error PGRST116 indica que no se encontró ningún registro
          return false
        }
        console.error('Error fetching enterprise check:', error)
        return false
      } else {
        if (data && Array.isArray(data) && data.length > 0) {
          idEnterprise = data[0].idempresa
          return true
        } else {
          return false
        }
      }
    }
    const enterpriseExists = await checkEnterprise(enterprises)
    if (!enterpriseExists) {
      const { data, error } = await supabase
        .from('empresas')
        .insert([{ nombre: enterprises }])
        .select()
      if (error) {
        console.error('Error fetching enterprises:', error)
      } else {
        console.log('Enterprises added successfully')
        idEnterprise = data[0].idempresa // se obtiene el id de la empresa
      }
    }
  }

  const addJob = async () => {
    const { data, error } = await supabase
      .from('trabajos')
      .insert([
        {
          docente: dni,
          empresa: idEnterprise
        }
      ])
      .select()
    if (error) {
      console.error('Error fetching job:', error)
    } else {
      console.log('Job added successfully')
    }
  }

  //Ingreso de datos para los docentes
  const handleSubmit = async () => {
    try {
      await addAreas()
      await addUniversity()
      await addCity()
      await addTeacher()
      await addDregree()
      await addStudies()
      await addPhone()
      await addTypeReceipt()
      await addCv()
      await addInterview()
      await addEnterprise()
      await addJob()
      // Procedemos a cerrar
      handleClose()
      window.location.reload()
    } catch (error) {
      console.error('Error during submission:', error)
    }
  }

  return (
    <>
      <button className="bg-white px-4 py-2 rounded-md flex " onClick={handleClickOpen}>
        <AddIcon className="text-primary-blue mr-1" />
        <p className="font-medium ">Añadir docente</p>
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            handleClose()
          }
        }}
      >
        <section className="flex justify-between px-8 pt-7 ">
          <article className="mr-40">
            <h2 className="text-2xl font-bold">Añadir Docente</h2>
            <p className="opacity-70">Ingrese los datos del nuevo docente</p>
          </article>
          <article>
            <button className="opacity-60" onClick={handleClose}>
              <CloseIcon />
            </button>
          </article>
        </section>
        {selectPage()}
        <div className="my-4 flex justify-end pr-4">
          <Stack spacing={2}>
            <Pagination count={3} shape="rounded" page={page} onChange={handlePage} />
          </Stack>
        </div>
      </Dialog>
    </>
  )
}
