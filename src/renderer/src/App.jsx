import Header from './components/Header'
import MenuDocentes from './components/MenuDocentes'
import TeacherBoard from './components/TeacherBoard'
import React from 'react'
function App() {
  const [teacherName, setTeacherName] = React.useState('')

  return (
    <>
      <Header />
      <MenuDocentes teacherName={teacherName} setTeacherName={setTeacherName} />
      <TeacherBoard teacherName={teacherName} />
    </>
  )
}

export default App
