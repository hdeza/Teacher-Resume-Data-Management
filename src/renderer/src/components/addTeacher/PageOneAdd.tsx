import React from 'react'

export default function PageOneAdd({
  name,
  setName,
  surName,
  setSurName,
  dni,
  setDni,
  phone,
  setPhone,
  degree,
  setDegree,
  university,
  setUniversity
}: {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  surName: string
  setSurName: React.Dispatch<React.SetStateAction<string>>
  dni: string
  setDni: React.Dispatch<React.SetStateAction<string>>
  phone: string
  setPhone: React.Dispatch<React.SetStateAction<string>>
  degree: string
  setDegree: React.Dispatch<React.SetStateAction<string>>
  university: string
  setUniversity: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <>
      <section className="px-8">
        <article className="flex flex-col  pt-4 font-medium">
          <label className="text-lg">Nombre</label>
          <input
            type="text"
            placeholder="Escriba el nombre del docente"
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Apellido</label>
          <input
            type="text"
            placeholder="Escriba el apellido del docente"
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={surName}
            onChange={(e) => setSurName(e.target.value)}
          />
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">N°Documento</label>
          <input
            type="number"
            placeholder="Digite la cédula"
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Telefono</label>
          <input
            type="number"
            placeholder="Digite número telefónico"
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Título</label>
          <input
            type="text"
            placeholder="Escriba el titulo (pregrado)"
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </article>
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
    </>
  )
}
