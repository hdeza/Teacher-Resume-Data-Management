import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

export default function AddTeacher() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
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
        <section className="px-8">
          <article className="flex flex-col  pt-4 font-medium">
            <label className="text-lg">Nombre</label>
            <input
              type="text"
              placeholder="Escriba el nombre del docente"
              className="border p-2 bg-gray-100 font-light rounded-md"
            />
          </article>
          <article className="flex flex-col pt-4 font-medium">
            <label className="text-lg">Apellido</label>
            <input
              type="text"
              placeholder="Escriba el apellido del docente"
              className="border p-2 bg-gray-100 font-light rounded-md"
            />
          </article>
          <article className="flex flex-col pt-4 font-medium">
            <label className="text-lg">N°Documento</label>
            <input
              type="number"
              placeholder="Digite la cédula"
              className="border p-2 bg-gray-100 font-light rounded-md"
            />
          </article>
          <article className="flex flex-col pt-4 font-medium">
            <label className="text-lg">Telefono</label>
            <input
              type="number"
              placeholder="Digite número telefónico"
              className="border p-2 bg-gray-100 font-light rounded-md"
            />
          </article>
          <article className="flex flex-col pt-4 font-medium">
            <label className="text-lg">Título</label>
            <input
              type="text"
              placeholder="Escriba el titulo (pregrado)"
              className="border p-2 bg-gray-100 font-light rounded-md"
            />
          </article>
        </section>
        <DialogActions>
          <div className="py-4">
            <Stack spacing={2}>
              <Pagination count={3} shape="rounded" />
            </Stack>
          </div>
        </DialogActions>
      </Dialog>
    </>
  )
}
