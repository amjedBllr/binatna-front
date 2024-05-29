import { useState } from 'react'
import Landing from './pages/general/Landing'
import { Route, Routes } from 'react-router-dom'

function App() {
  return(
    <>
    <Routes>
      <Route index element={<Landing/>}/>
      <Route path='/about' element={<>about</>}/>
    </Routes>
    </>
  )
}

export default App
