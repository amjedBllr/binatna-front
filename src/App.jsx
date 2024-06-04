import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/general/Landing';
import Auth from './layouts/Auth';
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />

        {/* auth routes */}
        <Route path='auth' element={<Auth />}>
          <Route path='register' element={<Register/>} />
          <Route path='login' element={<Login/>} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
