import React from 'react'

export default function PageOneAdd() {
  return (
    <>
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
        <article className="flex flex-col  pt-4 font-medium">
          <label className="text-lg">Universidad</label>
          <input
            type="text"
            placeholder="Escriba el nombre de la Universidad"
            className="border p-2 bg-gray-100 font-light rounded-md"
          />
        </article>
      </section>
    </>
  )
}
