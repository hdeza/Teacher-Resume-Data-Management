import React, { useRef } from 'react'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
export default function PageThreeAdd() {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = (event) => {
    event.preventDefault() //esto para que no se cierre el dialog del ingreso de datos del docente
    if (fileInputRef.current) {
      fileInputRef.current.click() // Simula el clic en el input de tipo file
    }
  }
  return (
    <>
      <section className="px-8 min-h-300">
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Recomendado por:</label>
          <input
            type="text"
            placeholder="Escriba un nombre"
            className="border p-2 bg-gray-100 font-light rounded-md"
          />
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Datos importantes</label>
          <textarea
            rows={2}
            placeholder="Escriba datos relevantes del docente..."
            className="border p-2 bg-gray-100 font-light rounded-md"
          ></textarea>
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Observaciones Generales</label>
          <textarea
            rows={3}
            placeholder="Escriba algunas observaciones del docente..."
            className="border p-2 bg-gray-100 font-light rounded-md"
          ></textarea>
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Observaciones de la Entrevista</label>
          <textarea
            rows={3}
            placeholder="Escriba algunas observaciones de la entrevista..."
            className="border p-2 bg-gray-100 font-light rounded-md"
          ></textarea>
        </article>
        <article className="flex justify-end  pt-4 ">
          <button onClick={handleButtonClick} className="flex border-2 p-2 rounded-md mr-3">
            <FileUploadOutlinedIcon />
            <p className="pl-1 font-medium">Subir CV</p>
          </button>
          <input //este input es el que se presiona como tal, sin embargo lo utilizo sin mostrarlo y uso su referencia
            //para simular que se presiona el boton pero en realiad estas presionando el button de SUBIR CV
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }} // Oculta el input
          />
          <button className="flex border-2 p-2 rounded-md bg-primary-blue text-white">
            <AddCircleOutlineRoundedIcon />
            <p className="pl-1 font-medium">Añadir</p>
          </button>
        </article>
      </section>
    </>
  )
}
