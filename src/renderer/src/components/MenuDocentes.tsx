import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import FiltrarButton from '../hooks/FiltrarButton'
// rounded-sm border-2 p-1
// pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
export default function MenuDocentes() {
  return (
    <>
      <section className="flex justify-between mt-24 mb-8 mx-10 p-2 border-b">
        <h1 className="text-3xl font-bold">Docentes</h1>
        <div className="flex">
          <label htmlFor="">
            <SearchIcon className="relative left-9 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar docente..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-5"
            />
          </label>
          <FiltrarButton />
        </div>
      </section>
    </>
  )
}
