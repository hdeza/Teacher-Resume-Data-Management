import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import SpeedDialAction from '@mui/material/SpeedDialAction'
const actions = [{ icon: <DeleteOutlineOutlinedIcon />, name: 'Limpiar filtros' }]
export default function FiltrarButton({
  setTeacherReception,
  setTeacherUniversity,
  setTeacherArea
}: {
  setTeacherReception: React.Dispatch<React.SetStateAction<string>>
  setTeacherUniversity: React.Dispatch<React.SetStateAction<string>>
  setTeacherArea: React.Dispatch<React.SetStateAction<string>>
}) {
  const [open, setOpen] = React.useState(false)
  const [receptionDate, setReceptionDate] = React.useState('')
  const [university, setUniversity] = React.useState('')
  const [area, setArea] = React.useState('')
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
    handleClose()
  }

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
          <article className="mr-40">
            <h2 className="text-3xl font-bold">Filtrar por</h2>
          </article>
          <article>
            {/* <button
              className="flex border-2 p-2 rounded-md bg-primary-blue text-white"
              onClick={handleFilter}
            >
              <FilterAltOutlinedIcon />
              <p className="mx-2">Filtrar</p>
            </button> */}
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
          </section>
        </section>
        <section>
          <article className="flex justify-end mb-4 mr-8">
            <SpeedDial
              ariaLabel="SpeedDial example"
              icon={<FilterAltOutlinedIcon />}
              onClose={handleCloseFilter}
              onOpen={handleOpenFilter}
              open={openFilter}
              sx={{
                position: 'absolute', // O 'absolute' para anclarlo a un contenedor
                bottom: 16, // Ajusta la distancia desde el borde superior
                right: 20, // Ajusta la distancia desde el borde derecho
                '& .MuiFab-primary': {
                  // Aplica estilos directamente al botón del SpeedDial
                  bgcolor: '#2A31FF', // Cambia el color de fondo
                  '&:hover': {
                    bgcolor: 'darkblue' // Cambia el color de fondo al hacer hover
                  },
                  borderRadius: '50%' // Cambia la forma (50% es para hacerlo circular, ajusta según necesites)
                }
              }}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={handleCloseFilter}
                />
              ))}
            </SpeedDial>
          </article>
        </section>
      </Dialog>
    </>
  )
}
