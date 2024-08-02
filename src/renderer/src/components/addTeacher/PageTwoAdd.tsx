import React from 'react'

export default function PageTwoAdd() {
  return (
    <>
      <section className="px-8">
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Año de nacimiento</label>
          <input
            type="date"
            placeholder="Seleccione el año"
            className="border p-2 bg-gray-100 font-light rounded-md"
          />
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Lugar de experiencia</label>
          <input
            type="number"
            placeholder="Escriba la(s) empresa(s) (separado por coma)"
            className="border p-2 bg-gray-100 font-light rounded-md"
          />
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Tiempo de experiencia</label>
          <input
            type="number"
            placeholder="Digite años de experiencia"
            className="border p-2 bg-gray-100 font-light rounded-md"
          />
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Area de experiencia</label>
          <input
            type="text"
            placeholder="Escriba el area"
            className="border p-2 bg-gray-100 font-light rounded-md"
          />
        </article>
        <article className="flex flex-col  pt-4 font-medium">
          <label className="text-lg">Fecha de recepción de hoja de vida</label>
          <input
            type="date"
            placeholder="Seleccione una fecha"
            className="border p-2 bg-gray-100 font-light rounded-md"
          />
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Tipo de recepción</label>
          <select className="border p-2 bg-gray-100 font-light rounded-md">
            <option value="">Seleccione una opción</option>
            <option value="1">Email</option>
            <option value="2">WhatsApp</option>
          </select>
        </article>
      </section>
    </>
  )
}
