import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import PageOneAdd from '../components/addTeacher/PageOneAdd'
import PageTwoAdd from '../components/addTeacher/PageTwoAdd'
import PageThreeAdd from '../components/addTeacher/PageThreeAdd'

export default function AddTeacher() {
  const [open, setOpen] = React.useState(false)
  const [page, setPage] = React.useState(1)

  // Status variables for teacher data
  const [name, setName] = React.useState('')
  const [surName, setSurName] = React.useState('')
  const [dni, setDni] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [degree, setDegree] = React.useState('')
  const [graduationDate, setGraduationDate] = React.useState('')
  const [university, setUniversity] = React.useState('')
  const [year, setYear] = React.useState('')
  const [enterprises, setEnterprises] = React.useState('')
  const [experience, setExperience] = React.useState('')
  const [area, setArea] = React.useState('')
  const [receiptDate, setReceiptDate] = React.useState('')
  const [typeReceipt, setTypeReceipt] = React.useState('')
  const [recommendedBy, setRecommendedBy] = React.useState('')
  const [importantFacts, setImportantFacts] = React.useState('')
  const [generalRemarks, setGeneralRemarks] = React.useState('')
  const [interviewDate, setInterviewDate] = React.useState('')
  const [interviewObservations, setInterviewObservations] = React.useState('')
  const [cvLink, setCVLink] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setName('')
    setSurName('')
    setDni('')
    setPhone('')
    setDegree('')
    setPhone('')
    setGraduationDate('')
    setUniversity('')
    setYear('')
    setEnterprises('')
    setExperience('')
    setArea('')
    setTypeReceipt('')
    setRecommendedBy('')
    setImportantFacts('')
    setGeneralRemarks('')
    setInterviewDate('')
    setInterviewObservations('')
    setCVLink('')
  }

  const handlePage = (event, value) => {
    setPage(value)
  }

  const selectPage = () => {
    switch (page) {
      case 1:
        return (
          <PageOneAdd
            name={name}
            setName={setName}
            surName={surName}
            setSurName={setSurName}
            dni={dni}
            setDni={setDni}
            degree={degree}
            setDegree={setDegree}
            phone={phone}
            setPhone={setPhone}
            university={university}
            setUniversity={setUniversity}
            graduationDate={graduationDate}
            setGraduationDate={setGraduationDate}
          />
        )
      case 2:
        return (
          <PageTwoAdd
            area={area}
            setArea={setArea}
            enterprises={enterprises}
            setEnterprises={setEnterprises}
            experience={experience}
            setExperience={setExperience}
            receiptDate={receiptDate}
            setReceiptDate={setReceiptDate}
            year={year}
            setYear={setYear}
            typeReceipt={typeReceipt}
            setTypeReceipt={setTypeReceipt}
            interviewDate={interviewDate}
            setInterviewDate={setInterviewDate}
          />
        )
      case 3:
        return (
          <PageThreeAdd
            cvLink={cvLink}
            setCVLink={setCVLink}
            generalRemarks={generalRemarks}
            setGeneralRemarks={setGeneralRemarks}
            importantFacts={importantFacts}
            setImportantFacts={setImportantFacts}
            interviewObservations={interviewObservations}
            setInterviewObservations={setInterviewObservations}
            recommendedBy={recommendedBy}
            setRecommendedBy={setRecommendedBy}
          />
        )
    }
  }

  return (
    <>
      <button className="bg-white px-4 py-2 rounded-md flex " onClick={handleClickOpen}>
        <AddIcon className="text-primary-blue mr-1" />
        <p className="font-medium ">Añadir docente</p>
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            handleClose()
          }
        }}
      >
        <section className="flex justify-between px-8 pt-7 ">
          <article className="mr-40">
            <h2 className="text-2xl font-bold">Añadir Docente</h2>
            <p className="opacity-70">Ingrese los datos del nuevo docente</p>
          </article>
          <article>
            <button className="opacity-60" onClick={handleClose}>
              <CloseIcon />
            </button>
          </article>
        </section>
        {selectPage()}
        <div className="my-4 flex justify-end pr-4">
          <Stack spacing={2}>
            <Pagination count={3} shape="rounded" page={page} onChange={handlePage} />
          </Stack>
        </div>
      </Dialog>
    </>
  )
}
