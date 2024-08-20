import React from 'react'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
export default function DownloadCv({ style = 'flex border-2 p-2 rounded-md', cvlink }) {
  return (
    <a href={cvlink} download target="_blank" rel="noopener noreferrer">
      <button className={style}>
        <FileDownloadOutlinedIcon />
        <p className="pl-1 font-medium ">Descargar Cv</p>
      </button>
    </a>
  )
}
