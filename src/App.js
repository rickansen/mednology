import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Splash from './routes/Splash';
import Login from './routes/Login';
import Option from './routes/Option';
import Home from './routes/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Option" element={<Option />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
};

export default App;
