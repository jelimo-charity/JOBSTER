import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing'
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/register" element={<Register/>} />

      </Routes>

    </Router>
    
    </>
  )
}

export default App
