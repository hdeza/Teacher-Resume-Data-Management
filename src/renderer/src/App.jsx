import Header from './components/Header'
import MenuDocentes from './components/MenuDocentes'
import TeacherBoard from './components/TeacherBoard'
import React from 'react'
function App() {
  const [teacherName, setTeacherName] = React.useState('')
  const [teacherReception, setTeacherReception] = React.useState('')
  const [teacherUniversity, setTeacherUniversity] = React.useState('')
  const [teacherArea, setTeacherArea] = React.useState('')
  return (
    <>
      <Header />
      <MenuDocentes
        teacherName={teacherName}
        setTeacherName={setTeacherName}
        setTeacherArea={setTeacherArea}
        setTeacherReception={setTeacherReception}
        setTeacherUniversity={setTeacherUniversity}
      />
      <TeacherBoard
        teacherName={teacherName}
        teacherArea={teacherArea}
        teacherReception={teacherReception}
        teacherUniversity={teacherUniversity}
      />
    </>
  )
}

export default App
