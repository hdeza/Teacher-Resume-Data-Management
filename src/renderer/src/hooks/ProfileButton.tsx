import React from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import CloseIcon from '@mui/icons-material/Close'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import DownloadCv from '../components/DownloadCv'
import EditTeacher from './EditTeacher'
import DeleteTeacher from './DeleteTeacher'
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

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

export default function ProfileButton({ teacher }: { teacher: teacherCardInfo }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const calculateAge = (birthdate: string) => {
    const birthDateObj = new Date(birthdate)
    const today = new Date()

    let age = today.getFullYear() - birthDateObj.getFullYear()
    const monthDifference = today.getMonth() - birthDateObj.getMonth()

    // Si el mes actual es anterior al mes de nacimiento o si es el mismo mes pero el día actual es anterior al día de nacimiento, resta 1 a la edad
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--
    }

    return age
  }
  const telefonos = teacher.telefono?.split('-')

  return (
    <React.Fragment>
      <button
        onClick={handleClickOpen}
        className="flex border-2 p-2 rounded-md bg-primary-blue text-white "
      >
        <VisibilityOutlinedIcon />
        <p className="pl-1 font-medium">Ver perfil</p>
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="md"
      >
        <section className="flex justify-between px-4 pt-4 ">
          {/* sección del header */}
          <p className="text-xl font-semibold ">Perfil Docente</p>
          <button onClick={handleClose} className="opacity-60">
            <CloseIcon />
          </button>
        </section>

        <section className="p-10 flex gap-x-9">
          {/* Sección completa de la informacion */}
          <section className="flex flex-col gap-y-7 min-w-96">
            {/* Sección del nombre y datos basicos*/}
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
            <section className="flex flex-col gap-y-2 pt-2">
              <article className="flex justify-between">
                <p className="opacity-70">N°Document:</p>
                <p className="font-semibold">{teacher.documentoid}</p>
              </article>
              <article className="flex justify-between">
                <p className="opacity-70">Edad:</p>
                <p className="font-semibold">
                  {teacher.fechanacimiento ? calculateAge(teacher.fechanacimiento) : 'N/A'}
                </p>
              </article>
              <article className="flex justify-between">
                <p className="opacity-70">Telefono:</p>
                <div>
                  {telefonos?.map((telefono) => {
                    return (
                      <p key={telefono} className="font-semibold">
                        {telefono}
                      </p>
                    )
                  })}
                </div>
              </article>
              <article className="flex justify-between">
                <p className="opacity-70">Ciudad:</p>
                <p className="font-semibold">{teacher.ciudad}</p>
              </article>
              <article className="flex justify-between">
                <p className="opacity-70">Años de Experiencia:</p>
                <p className="font-semibold">{teacher.tiempoexperiencia} años</p>
              </article>
              <article className="flex justify-between">
                <p className="opacity-70">Experiencia:</p>
                <p className="font-semibold">{teacher.empresa}</p>
              </article>
              <article className="flex justify-between">
                <p className="opacity-70">Educación:</p>
                <div className="text-right">
                  <p className="font-semibold">{teacher.titulo}</p>
                  <p className="text-sm opacity-80">{teacher.universidad}</p>
                </div>
              </article>
              <article className="flex justify-between">
                <p className="opacity-70">Fecha de Graduación:</p>
                <div className="text-right">
                  <p className="font-semibold">{teacher.fechagraduacion}</p>
                </div>
              </article>
              <article className="flex justify-between">
                <p className="opacity-70">Area:</p>
                <p className="font-semibold">{teacher.area}</p>
              </article>
              <article className="flex justify-between">
                <p className="opacity-70">Recepción hoja de vida:</p>
                <p className="font-semibold">{teacher.fecharecepcion}</p>
              </article>
              <article className="flex justify-between">
                <p className="opacity-70">Tipo de recepción:</p>
                <p className="font-semibold">{teacher.tiporecepcion}</p>
              </article>
              <article className="flex justify-between">
                <p className="opacity-70">Fecha Entrevista:</p>
                <p className="font-semibold">{teacher.fechaEntrevista}</p>
              </article>
              <article className="flex justify-between">
                <p className="opacity-70">Recomendado por:</p>
                <p className="font-semibold">{teacher.recomendado}</p>
              </article>
            </section>
            {open && (
              <section className="flex mx-auto">
                <DownloadCv
                  style="flex border-2 p-2 rounded-md bg-primary-blue text-white mr-2"
                  cvlink={teacher.cvlink}
                />
                <EditTeacher teacher={teacher} />
                <DeleteTeacher teacher={teacher} />
              </section>
            )}
          </section>
          <section className="flex flex-col gap-y-2">
            {/* Sección de información detallada del docente */}
            <article>
              <p className="font-bold text-xl pb-1">Datos importantes</p>
              <p className="opacity-70 ">{teacher.datosimportantes}</p>
            </article>
            <article>
              <p className="font-bold text-xl pb-1">Observaciones Generales</p>
              <p className="opacity-70 ">{teacher.observaciongeneral}</p>
            </article>
            <article>
              <p className="font-bold text-xl pb-1">Observaciones Entrevista</p>
              <p className="opacity-70 ">{teacher.observacionEntrevista}</p>
            </article>
          </section>
        </section>
      </Dialog>
    </React.Fragment>
  )
}
