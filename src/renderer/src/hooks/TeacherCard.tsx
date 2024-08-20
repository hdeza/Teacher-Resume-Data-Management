import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

import ProfileButton from './ProfileButton'
import DownloadCv from '../components/DownloadCv'

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
export default function TeacherCard({ teacher }: { teacher: teacherCardInfo }) {
  // calculamos la edad segun el año actual y el año de nacimiento del docente
  const calculateAge = (birthdate: string) => {
    const currentYear = new Date().getFullYear()
    const birthYear = parseInt(birthdate)
    const age = currentYear - birthYear
    return age
  }
  return (
    <>
      <div className="border-2 p-7 max-w-xs">
        <section className="flex">
          <div className="flex flex-col justify-center">
            <PersonOutlineOutlinedIcon sx={{ fontSize: 35 }} />
          </div>
          <article className="ml-2">
            <p className="text-xl font-bold">{teacher.nombre}</p>
            <p className="text-xl font-bold">{teacher.apellido}</p>
            <p className="text-sm opacity-80">{teacher.area}</p>
          </article>
        </section>
        <section className="flex justify-around pt-5 pb-3">
          <article className="w-2/5">
            <p className="text-sm opacity-70">Experiencia</p>
            <p className="text-lg font-semibold">{teacher.tiempoexperiencia} años</p>
          </article>
          <article className="w-2/5">
            <p className="text-sm opacity-70">Titulo</p>
            <p className="text-lg font-semibold">{teacher.titulo}</p>
          </article>
        </section>
        <section className="flex justify-around py-3 ">
          <article className="w-2/5">
            <p className="text-sm opacity-70">Area</p>
            <p className="text-lg font-semibold">{teacher.area}</p>
          </article>
          <article className="w-2/5">
            <p className="text-sm opacity-70">Edad</p>
            <p className="text-lg font-semibold">
              {teacher.fechanacimiento ? calculateAge(teacher.fechanacimiento) : 'N/A'}
            </p>
          </article>
        </section>
        <section className="flex gap-x-1">
          <DownloadCv cvlink={teacher.cvlink} />
          <ProfileButton />
        </section>
      </div>
    </>
  )
}

// const pdfLink = 'https://drive.google.com/file/d/1QTDdztChYGl9Wy6Nx9y-SrpNR5a68UB2/view?usp=sharing'
