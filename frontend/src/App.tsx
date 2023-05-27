import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ChatApplication from './pages/Chat/ChatApplication';

const App: FC = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<ChatApplication/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;