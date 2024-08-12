import React, { useRef } from 'react'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
export default function PageThreeAdd({
  recommendedBy,
  setRecommendedBy,
  importantFacts,
  setImportantFacts,
  generalRemarks,
  setGeneralRemarks,
  interviewObservations,
  setInterviewObservations,
  cvLink,
  setCVLink,
  handleSubmit
}: {
  recommendedBy: string
  setRecommendedBy: React.Dispatch<React.SetStateAction<string>>
  importantFacts: string
  setImportantFacts: React.Dispatch<React.SetStateAction<string>>
  generalRemarks: string
  setGeneralRemarks: React.Dispatch<React.SetStateAction<string>>
  interviewObservations: string
  setInterviewObservations: React.Dispatch<React.SetStateAction<string>>
  cvLink: string
  setCVLink: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: () => void
}) {
  return (
    <>
      <section className="px-8 min-h-300">
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Recomendado por:</label>
          <input
            type="text"
            placeholder="Escriba un nombre"
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={recommendedBy}
            onChange={(e) => setRecommendedBy(e.target.value)}
          />
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Datos importantes</label>
          <textarea
            rows={2}
            placeholder="Escriba datos relevantes del docente..."
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={importantFacts}
            onChange={(e) => setImportantFacts(e.target.value)}
          ></textarea>
        </article>
        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Observaciones Generales</label>
          <textarea
            rows={3}
            placeholder="Escriba algunas observaciones del docente..."
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={generalRemarks}
            onChange={(e) => setGeneralRemarks(e.target.value)}
          ></textarea>
        </article>

        <article className="flex flex-col pt-4 font-medium">
          <label className="text-lg">Observaciones de la Entrevista</label>
          <textarea
            rows={3}
            placeholder="Escriba algunas observaciones de la entrevista..."
            className="border p-2 bg-gray-100 font-light rounded-md"
            value={interviewObservations}
            onChange={(e) => setInterviewObservations(e.target.value)}
          ></textarea>
        </article>
        <article className="flex justify-between pt-4 ">
          <input
            placeholder="Pega aquí el enlace a tu CV en formato PDF"
            className="border pl-2 bg-gray-100 font-light rounded-md w-3/4"
            value={cvLink}
            onChange={(e) => setCVLink(e.target.value)}
          />
          <button
            className="flex border-2 p-2 rounded-md bg-primary-blue text-white"
            onClick={handleSubmit}
          >
            <AddCircleOutlineRoundedIcon />
            <p className="pl-1 font-medium">Añadir</p>
          </button>
        </article>
      </section>
    </>
  )
}
