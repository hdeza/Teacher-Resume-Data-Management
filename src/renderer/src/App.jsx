import Header from './components/Header'
import MenuDocentes from './components/MenuDocentes'
import TeacherBoard from './components/TeacherBoard'
import React from 'react'
function App() {
  const [teacherName, setTeacherName] = React.useState('')
  const [teacherReception, setTeacherReception] = React.useState('')
  const [teacherUniversity, setTeacherUniversity] = React.useState('')
  const [teacherArea, setTeacherArea] = React.useState('')
  const [teacherDegree, setTeacherDegree] = React.useState('')
  const [teacherCity, setTeacherCity] = React.useState('')
  const [teacherRecommended, setTeacherRecommended] = React.useState('')
  const [downloadPdf, setDownloadPdf] = React.useState(false)
  return (
    <>
      <Header />
      <MenuDocentes
        teacherName={teacherName}
        setTeacherName={setTeacherName}
        setTeacherArea={setTeacherArea}
        setTeacherReception={setTeacherReception}
        setTeacherUniversity={setTeacherUniversity}
        setTeacherCity={setTeacherCity}
        setTeacherDegree={setTeacherDegree}
        setTeacherRecommended={setTeacherRecommended}
        setDownloadPdf={setDownloadPdf}
      />
      <TeacherBoard
        teacherName={teacherName}
        teacherArea={teacherArea}
        teacherReception={teacherReception}
        teacherUniversity={teacherUniversity}
        teacherCity={teacherCity}
        teacherDegree={teacherDegree}
        teacherRecommended={teacherRecommended}
        downloadPdf={downloadPdf}
        setDownloadPdf={setDownloadPdf}
      />
    </>
  )
}

export default App
