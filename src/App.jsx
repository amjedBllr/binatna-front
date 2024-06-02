import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/general/Landing';
 // Ensure the correct path to Loader component

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
