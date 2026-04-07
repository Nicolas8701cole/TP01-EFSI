import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AdministrarCita from './AdministrarCita.jsx'
import './App.css'

function ListaCitas({ citas }) {// "{}"porque recibe varios
    return (
        <div>
            {citas.map((cita, index) => (
                <div key={index} className="lista-citas">
                    <AdministrarCita Mascota={cita.mascota} Dueño={cita.dueño} Fecha={cita.fecha} Hora={cita.hora} Sintomas={cita.sintomas} />
                </div>
            ))}
            <AdministrarCita Mascota="Walter" Dueño="Pascal" Fecha="2026-07-06" Hora="06:07" Sintomas="Padece de six seven" />
            <AdministrarCita Mascota="Luna" Dueño="Camila" Fecha="2026-07-08" Hora="14:30" Sintomas="No quiere comer" />
            <AdministrarCita Mascota="Rocky" Dueño="Matias" Fecha="2026-07-09" Hora="09:45" Sintomas="Le duele la pata al caminar" />

        </div>
    )
}

export default ListaCitas
