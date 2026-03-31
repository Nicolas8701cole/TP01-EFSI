import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Cita() {
    return (
        <>
            <label htmlFor="NombreMascota">Nombre Mascota</label>
            <input type="text" id="NombreMascota" />


            <label htmlFor="NombreDueño">Nombre Dueño</label>
            <input type="text" id="NombreDueño" />

            <label htmlFor="Fecha">Fecha</label>
            <input type="date" name="fecha" id="fecha" className="u-full-width" defaultValue="" />
        </>
    )
}

export default Cita
