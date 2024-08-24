import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import SpeedDial from '@mui/material/SpeedDial'
// import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import CloseIcon from '@mui/icons-material/Close'

export default function FiltrarButton({
  setTeacherReception,
  setTeacherUniversity,
  setTeacherArea,
  setTeacherTitulo,
  setTeacherCiudad,
  setTeacherRecomendacion
}: {
  setTeacherReception: React.Dispatch<React.SetStateAction<string>>
  setTeacherUniversity: React.Dispatch<React.SetStateAction<string>>
  setTeacherArea: React.Dispatch<React.SetStateAction<string>>
  setTeacherTitulo: React.Dispatch<React.SetStateAction<string>>
  setTeacherCiudad: React.Dispatch<React.SetStateAction<string>>
  setTeacherRecomendacion: React.Dispatch<React.SetStateAction<string>>
}) {
  const [open, setOpen] = React.useState(false)
  const [receptionDate, setReceptionDate] = React.useState('')
  const [university, setUniversity] = React.useState('')
  const [area, setArea] = React.useState('')
  const [degree, setDegree] = React.useState('')
  const [city, setCity] = React.useState('')
  const [recommendedBy, setRecommendedBy] = React.useState('')
  const [openFilter, setOpenFilter] = React.useState(false)
  const handleOpenFilter = () => setOpenFilter(true)
  const handleCloseFilter = () => setOpenFilter(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleFilter = () => {
    setTeacherArea(area)
    setTeacherReception(receptionDate)
    setTeacherUniversity(university)
    setTeacherTitulo(degree)
    setTeacherCiudad(city)
    setTeacherRecomendacion(recommendedBy)
    handleClose()
  }

  const handleEmptyFilter = () => {
    setTeacherArea('')
    setTeacherReception('')
    setTeacherUniversity('')
    setTeacherTitulo('')
    setTeacherCiudad('')
    setTeacherRecomendacion('')
    setArea('')
    setCity('')
    setRecommendedBy('')
    setDegree('')
    setReceptionDate('')
    setUniversity('')
  }

  const actions = [
    { icon: <DeleteOutlineOutlinedIcon />, name: 'Limpiar filtros', action: handleEmptyFilter },
    { icon: <CloseIcon />, name: 'Salir', action: handleClose }
  ]

  return (
    <>
      <button
        onClick={handleClickOpen}
        className="border border-gray-300  pl-4 py-2 rounded-md flex "
      >
        <p className="mr-3 text-gray-500">Filtrar por...</p>
        <ArrowDropDownIcon className="mr-2" />
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
          <article className="">
            <h2 className="text-3xl font-bold">Filtrar por</h2>
          </article>
          <article className="flex justify-end">
            <SpeedDial
              ariaLabel="SpeedDial example"
              icon={<FilterAltOutlinedIcon onClick={handleFilter} />}
              onClose={handleCloseFilter}
              onOpen={handleOpenFilter}
              open={openFilter}
              direction="left"
              sx={{
                position: 'absolute', // O 'absolute' para anclarlo a un contenedor                right: 20, // Ajusta la distancia desde el borde derecho
                '& .MuiFab-primary': {
                  // Aplica estilos directamente al botón del SpeedDial
                  bgcolor: '#2A31FF', // Cambia el color de fondo
                  '&:hover': {
                    bgcolor: 'darkblue' // Cambia el color de fondo al hacer hover
                  },
                  borderRadius: '50%', // Cambia la forma (50% es para hacerlo circular, ajusta según necesites)
                  width: 45, // Ajusta el ancho del botón
                  height: 45
                }
              }}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={action.action}
                />
              ))}
            </SpeedDial>
          </article>
        </section>
        <section className="p-10 flex">
          <section>
            <article className="flex flex-col  pt-4 font-medium">
              <label className="text-lg">Fecha de recepción</label>
              <input
                type="date"
                placeholder="Seleccione una fecha"
                className="border p-2 bg-gray-100 font-light rounded-md"
                value={receptionDate}
                onChange={(e) => setReceptionDate(e.target.value)}
              />
            </article>
            <article className="flex flex-col pt-4 font-medium">
              <label className="text-lg">Area</label>
              <input
                type="text"
                placeholder="Escriba el area"
                className="border p-2 bg-gray-100 font-light rounded-md"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </article>
            <article className="flex flex-col pt-4 font-medium">
              <label className="text-lg">Ciudad de residencia</label>
              <input
                type="text"
                placeholder="Escriba una ciudad"
                className="border p-2 bg-gray-100 font-light rounded-md"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </article>
          </section>
          <section className="ml-5">
            <article className="flex flex-col  pt-4 font-medium">
              <label className="text-lg">Universidad</label>
              <input
                type="text"
                placeholder="Escriba el nombre de la Universidad"
                className="border p-2 bg-gray-100 font-light rounded-md"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
            </article>
            <article className="flex flex-col  pt-4 font-medium">
              <label className="text-lg">Titulo</label>
              <input
                type="text"
                placeholder="Escriba el titulo universitario"
                className="border p-2 bg-gray-100 font-light rounded-md"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              />
            </article>
            <article className="flex flex-col pt-4 font-medium">
              <label className="text-lg">Recomendado por</label>
              <input
                type="text"
                placeholder="Escriba un nombre"
                className="border p-2 bg-gray-100 font-light rounded-md"
                value={recommendedBy}
                onChange={(e) => setRecommendedBy(e.target.value)}
              />
            </article>
          </section>
        </section>
      </Dialog>
    </>
  )
}
