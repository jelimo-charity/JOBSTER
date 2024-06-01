import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing'
import Register from './pages/Register';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/register" element={<Register/>} />

      </Routes>

    </Router>
    

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/register' element={<Register />} />

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
