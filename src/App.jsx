import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Notes from './Pages/Notes'
import Create from './Pages/Create'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes />}></Route>
          <Route path='/create' element={<Create />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
