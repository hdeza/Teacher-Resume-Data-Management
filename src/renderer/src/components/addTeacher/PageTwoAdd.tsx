import React from 'react'

export default function PageTwoAdd({
  year,
  setYear,
  enterprises,
  setEnterprises,
  experience,
  setExperience,
  area,
  setArea,
  receiptDate,
  setReceiptDate,
  typeReceipt,
  setTypeReceipt,
  interviewDate,
  setInterviewDate
}: {
  year: string
  setYear
  enterprises: string
  setEnterprises
  experience: string
  setExperience: React.Dispatch<React.SetStateAction<string>>
  area: string
  setArea: React.Dispatch<React.SetStateAction<string>>
  receiptDate: string
  setReceiptDate: React.Dispatch<React.SetStateAction<string>>
  typeReceipt: string
  setTypeReceipt: React.Dispatch<React.SetStateAction<string>>
  interviewDate: string
  setInterviewDate: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <>
      <section className="px-8">
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Año de nacimiento</label>
          <input
            type="text"
            placeholder="AAAA"
            maxLength={4}
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Lugar de experiencia</label>
          <input
            type="text"
            placeholder="Escriba la(s) empresa(s) (separado por coma)"
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={enterprises}
            onChange={(e) => setEnterprises(e.target.value)}
          />
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Tiempo de experiencia</label>
          <input
            type="number"
            placeholder="Digite años de experiencia"
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Area de experiencia</label>
          <input
            type="text"
            placeholder="Escriba el area"
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </article>
        <article className="flex flex-col  pt-4 font-medium">
          <label className="text-lg">Fecha de recepción de hoja de vida</label>
          <input
            type="date"
            placeholder="Seleccione una fecha"
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={receiptDate}
            onChange={(e) => setReceiptDate(e.target.value)}
          />
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Tipo de recepción</label>
          <select
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={typeReceipt}
            onChange={(e) => setTypeReceipt(e.target.value)}
          >
            <option value="">Seleccione una opción</option>
            <option value="Correo">Correo</option>
            <option value="Fisico">Físico</option>
          </select>
        </article>
        <article className="flex flex-col  pt-4 font-medium">
          <label className="text-lg">Fecha de entrevista</label>
          <input
            type="date"
            placeholder="Seleccione una fecha"
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={interviewDate}
            onChange={(e) => setInterviewDate(e.target.value)}
          />
        </article>
      </section>
    </>
  )
}
