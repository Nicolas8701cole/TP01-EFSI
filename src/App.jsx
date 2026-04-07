import { useState } from "react";
import Cita from './Cita.jsx'
import ListaCitas from './ListaCitas.jsx'
import './App.css'

function App() {
  const [citas, setCitas] = useState([])
  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita])
  }
  return (
    <>
      <main>
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <h2>Crear mi Cita</h2>
              <Cita agregarCita={agregarCita} />
            </div>

            <div className="one-half column">
              <h2>Administra tus citas</h2>
              <ListaCitas citas={citas} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App