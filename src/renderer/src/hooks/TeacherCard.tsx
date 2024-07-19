import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import ProfileButton from './ProfileButton'
export default function TeacherCard() {
  return (
    <>
      <div className="border-2 p-7 max-w-xs">
        <section className="flex">
          <div className="flex flex-col justify-center">
            <PersonOutlineOutlinedIcon sx={{ fontSize: 35 }} />
          </div>
          <article className="ml-2">
            <p className="text-xl font-bold">John Doe</p>
            <p className="text-sm opacity-80">Docente de Matematicas</p>
          </article>
        </section>
        <section className="flex justify-around pt-5 pb-3">
          <article className="w-2/5">
            <p className="text-sm opacity-70">Experiencia</p>
            <p className="text-lg font-semibold">5 años</p>
          </article>
          <article className="w-2/5">
            <p className="text-sm opacity-70">Titulo</p>
            <p className="text-lg font-semibold">Biólogo</p>
          </article>
        </section>
        <section className="flex justify-around py-3 ">
          <article className="w-2/5">
            <p className="text-sm opacity-70">Area</p>
            <p className="text-lg font-semibold">Ciencias Naturales</p>
          </article>
          <article className="w-2/5">
            <p className="text-sm opacity-70">Edad</p>
            <p className="text-lg font-semibold">32</p>
          </article>
        </section>
        <section className="flex gap-x-1">
          <a
            href="https://drive.google.com/file/d/1QTDdztChYGl9Wy6Nx9y-SrpNR5a68UB2/view?usp=sharing"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex border-2 p-2 rounded-md ">
              <FileDownloadOutlinedIcon />
              <p className="pl-1 font-medium">Descargar Cv</p>
            </button>
          </a>
          <ProfileButton />
        </section>
      </div>
    </>
  )
}

// const pdfLink = 'https://drive.google.com/file/d/1QTDdztChYGl9Wy6Nx9y-SrpNR5a68UB2/view?usp=sharing'
