import * as React from 'react'
import supabase from '../database/supabase'

import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

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
  fechagraduacion: string | undefined
  universidad: string | undefined
  cvlink: string | undefined
}

export default function EditTeacher({ teacher }: { teacher: teacherCardInfo }) {
  const [loading, setLoading] = React.useState(false)

  const deletePhone = async () => {
    const { error } = await supabase.from('telefonos').delete().eq('docente', teacher.documentoid)
    if (error) {
      console.error('Error fetching phone:', error)
    } else {
      console.log('Phone deleted successfully')
    }
  }
  const deleteCv = async () => {
    const { error } = await supabase.from('resumes').delete().eq('docente', teacher.documentoid)
    if (error) {
      console.error('Error fetching cv:', error)
    } else {
      console.log('CV deleted successfully')
    }
  }
  const deleteStudies = async () => {
    const { error } = await supabase.from('estudios').delete().eq('docente', teacher.documentoid)
    if (error) {
      console.error('Error fetching studies:', error)
    } else {
      console.log('Studies deleted successfully')
    }
  }

  const deleteInterview = async () => {
    const { error } = await supabase.from('entrevistas').delete().eq('docente', teacher.documentoid)
    if (error) {
      console.error('Error fetching interview:', error)
    } else {
      console.log('Interview deleted successfully')
    }
  }

  const deleteJob = async () => {
    const { error } = await supabase.from('trabajos').delete().eq('docente', teacher.documentoid)
    if (error) {
      console.error('Error fetching job:', error)
    } else {
      console.log('Job deleted successfully')
    }
  }

  const deleteTeacher = async () => {
    const { error } = await supabase
      .from('docentes')
      .delete()
      .eq('documentoid', teacher.documentoid)
    if (error) {
      console.error('Error adding teacher:', error)
    } else {
      console.log('Teacher deleted successfully')
    }
  }

  //Ingreso de datos para los docentes
  const handleSubmit = async () => {
    try {
      setLoading(true)

      await deletePhone()
      await deleteCv()
      await deleteStudies()
      await deleteInterview()
      await deleteJob()
      await deleteTeacher()

      window.location.reload()
    } catch (error) {
      console.error('Error during submission:', error)
    }
  }

  return (
    <>
      <button
        className=" px-3 py-2 rounded-md text-gray-500 flex hover:text-red-600 "
        onClick={handleSubmit}
      >
        <DeleteOutlineOutlinedIcon className="hover:scale-110 transition-transform duration-300 ease-in-out" />
      </button>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}
