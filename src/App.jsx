import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import TestForm from './pages/TestForm';

import './App.css'

function App() {
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  return (
    <div>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="home2" element={<Home2 />} />
          <Route path="TestForm" element={<TestForm />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
