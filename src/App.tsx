import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Entrance from './layouts/Entrance';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Entrance />}>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Route>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
