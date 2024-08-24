import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import FiltrarButton from '../hooks/FiltrarButton'
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined'
export default function MenuDocentes({
  teacherName,
  setTeacherName,
  setTeacherReception,
  setTeacherUniversity,
  setTeacherArea,
  setTeacherDegree,
  setTeacherCity,
  setTeacherRecommended
}: {
  teacherName: string
  setTeacherName: React.Dispatch<React.SetStateAction<string>>
  setTeacherReception: React.Dispatch<React.SetStateAction<string>>
  setTeacherUniversity: React.Dispatch<React.SetStateAction<string>>
  setTeacherArea: React.Dispatch<React.SetStateAction<string>>
  setTeacherDegree: React.Dispatch<React.SetStateAction<string>>
  setTeacherCity: React.Dispatch<React.SetStateAction<string>>
  setTeacherRecommended: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <>
      <section className="flex justify-between mt-24 mb-8 mx-10 p-2 border-b">
        <h1 className="text-3xl font-bold">Docentes</h1>
        <div className="flex">
          <label>
            <SearchIcon className="relative left-9 text-gray-400" />
            <input
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              type="text"
              placeholder="Buscar docente..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-5"
            />
          </label>
          <FiltrarButton
            setTeacherArea={setTeacherArea}
            setTeacherReception={setTeacherReception}
            setTeacherUniversity={setTeacherUniversity}
            setTeacherCiudad={setTeacherCity}
            setTeacherRecomendacion={setTeacherRecommended}
            setTeacherTitulo={setTeacherDegree}
          />
          <button className="flex border-2 p-2 rounded-md bg-primary-blue text-white ml-5">
            <PictureAsPdfOutlinedIcon />
            <p className="pl-1 font-medium">PDF</p>
          </button>
        </div>
      </section>
    </>
  )
}
