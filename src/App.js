import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Splash from './routes/Splash';
import Login from './routes/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default App;
