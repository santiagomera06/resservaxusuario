import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './pages/Navbar'
import Usuario from './pages/Usuario'
import Reserva from './pages/Reserva'
import Login from './pages/login'
import Register from './pages/Register'
import UserDetails from './pages/UserDetails'
import Home from './pages/Home'
import { UserContext } from "./pages/Usuario";


function App() {
    const [selectedUser, setselectedUser] = useState(null);
    
  return (
    <div>
      <Navbar />
      <div className="container">
      <UserContext.Provider value={{ selectedUser, setselectedUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<Usuario />} />
          <Route path="/usuario/:id" element={<UserDetails />} />
          <Route path="/reservas" element={<Reserva />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
        </UserContext.Provider>
      </div>
    </div>
  )
}

export default App