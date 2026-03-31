import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Cita() {
    return (
        <>
            <form action="">
                <label htmlFor="NombreMascota">Nombre Mascota</label>
                <input type="text" id="NombreMascota" className="u-full-width" defaultValue="" />

                <label htmlFor="NombreDueño">Nombre Dueño</label>
                <input type="text" id="NombreDueño" className="u-full-width" defaultValue="" />

                <label htmlFor="Fecha">Fecha</label>
                <input type="date" name="fecha" id="fecha" className="u-full-width" defaultValue="" />

                <label htmlFor="hora">Hora</label>
                <input type="time" name="hora" id="hora" className="u-full-width" defaultValue="" />

                <label htmlFor="sintomas">Sintomas</label>
                <textarea name="sintomas" id="sintomas" className="u-full-width" defaultValue=""></textarea>

                <button type="submit" className="u-full-width button button-primary">
                    Agregar Cita
                </button>
            </form>
        </>
    )
}

export default Cita
