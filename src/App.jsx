import { useState } from 'react'
import Landing from './pages/general/Landing'
import { Route, Routes } from 'react-router-dom'

function App() {
  return(
    <>
    <Routes>
      <Route index element={<Landing/>}/>
    </Routes>
    </>
  )
}

export default App
