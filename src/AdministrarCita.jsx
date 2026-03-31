import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Cita.css'

function AdministrarCita(Mascota, Dueño, Fecha, Hora, Sintomas) {
  return (
    <>
      <label htmlFor="Mascota">Mascota: {Mascota}</label>
      <label htmlFor="Dueño">Dueño: {Dueño}</label>
      <label htmlFor="Fecha">Fecha: {Fecha}</label>
      <label htmlFor="Hora">Hora: {Hora} </label>
      <label htmlFor="Sintomas">Sintomas: {Sintomas}</label>
      <button>Eliminar ×</button>
    </>
  )
}

export default AdministrarCita
