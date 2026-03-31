import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AdministrarCita from './AdministrarCita'
import './ListaCitas.css'

function ListaCitas() {
    return (
        <>
            <AdministrarCita Mascota = "Walter" Dueño = "Pascal" Fecha = '06-07-2026' Hora = "06-07" Sintomas = "Padece de six seven"/>
        </>
    )
}

export default ListaCitas
