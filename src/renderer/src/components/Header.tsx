import React from 'react'
import AddTeacher from '../hooks/AddTeacher'

export default function Header() {
  return (
    <header className="flex justify-between px-6 py-4 bg-primary-blue fixed top-0 left-0 w-full z-10">
      <h1 className="text-3xl text-white font-bold">
        Base de Datos Hojas de Vida Colegio San Francisco Javier{' '}
      </h1>
      <AddTeacher />
    </header>
  )
}
