import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Entrance from './layouts/Entrance';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import RouteGuard from './components/RouteGuard';

function App() {
  return (
    <Routes>
      <Route element={<RouteGuard />}>
        <Route path="/" element={<Main />} />
        <Route element={<Entrance />}>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
