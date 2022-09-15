import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Splash from './routes/Splash';
import Login from './routes/Login';
import Option from './routes/Option';
import Home from './routes/Home';
import NearbyStores from './routes/NearbyStores';
import NewRelease from './routes/NewRelease';
import Membership from './routes/Membership';
import Promos from './routes/Promos';
import Teleconsultation from './routes/Teleconsultation';
import Reminder from './routes/Reminder';
import Converter from './routes/Converter';
import Others from './routes/Others';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Option" element={<Option />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/NearbyStores" element={<NearbyStores />} />
      <Route path="/NewRelease" element={<NewRelease />} />
      <Route path="/Membership" element={<Membership />} />
      <Route path="/Promos" element={<Promos />} />
      <Route path="/Teleconsultation" element={<Teleconsultation />} />
      <Route path="/Reminder" element={<Reminder />} />
      <Route path="/Converter" element={<Converter />} />
      <Route path="/Others" element={<Others />} />
    </Routes>
  );
};

export default App;
