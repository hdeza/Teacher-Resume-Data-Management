import React from 'react'
import AddTeacher from '../hooks/AddTeacher'

export default function Header() {
  return (
    <header className="flex justify-between px-6 py-4 bg-blue-600 fixed top-0 left-0 w-full z-10">
      <h1 className="text-3xl text-white font-bold">Gestión de Hojas de Vida</h1>
      <AddTeacher />
    </header>
  )
}
