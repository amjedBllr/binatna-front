import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/general/Landing';
import Auth from './layouts/Auth';


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />

        {/* auth routes */}
        <Route path='auth' element={<Auth />}>
          <Route path='register' element={<>register</>} />
          <Route path='login' element={<>login</>} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
