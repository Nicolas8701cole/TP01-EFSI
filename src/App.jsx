import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Cita from './Cita.jsx'
import ListaCitas from './ListaCitas.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <section>
          <h2>Crear mi Cita</h2>
          <>
            <Cita />
          </>
          <h2>Administra tus citas</h2>
          <>
            <ListaCitas />
          </>
        </section>
      </main>
    </>
  )
}

export default App
