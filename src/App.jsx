import Cita from './Cita.jsx'
import ListaCitas from './ListaCitas.jsx'
import './App.css'

function App() {
  return (
    <main>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Cita />
          </div>

          <div className="one-half column">
            <h2>Administra tus citas</h2>
            <ListaCitas />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App