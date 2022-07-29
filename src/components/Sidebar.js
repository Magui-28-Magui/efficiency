import React from 'react';
import { Link } from 'react-router-dom';
import { FcHome, FcWorkflow, FcOvertime, FcAcceptDatabase, FcInspection } from 'react-icons/fc';

function Sidebar() {
    return (
        <div className='bg-white shadow-lg' style={{ height: "100vh" }}>
            <ul className='nav flex-column my-5 pt-4'>
                <li className='nav-item'>
                    <Link className='nav-link text-dark fw-bold' to="/"><FcHome size={25} style={{ marginRight: "0.5rem" }} />Inicio</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link text-dark' to="/form"><FcWorkflow size={25} style={{ marginRight: "0.5rem" }} />Asistencias y movimientos</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link text-dark' to="/extra_hour"><FcOvertime size={25} style={{ marginRight: "0.5rem" }} />Tiempo extra</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link text-dark' to="/"><FcAcceptDatabase size={25} style={{ marginRight: "0.5rem" }} />Base de datos</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link text-dark' to="/"><FcInspection size={25} style={{ marginRight: "0.5rem" }} />Reporte horas ganadas</Link>
                </li>
            </ul>
        </div>)
}

export default Sidebar