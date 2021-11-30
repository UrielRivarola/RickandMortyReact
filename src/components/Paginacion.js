import React from 'react';


function Paginacion({prev, next, anterior, siguiente}) {

    const handleAnterior = () => {
        anterior();
    }

    const handleSiguiente = () => {
        siguiente();
    }

    return (
        <nav>
            <ul className="pagination justify-content-center align-items-center mt-4">
                {prev ? (
                <li className="page-item">
                    <button className="page-link bg-dark text-danger" onClick={handleAnterior}>Anterior</button>
                </li>
                ) : null}
                {next ? (
                <li className="page-item">
                    <button className="page-link bg-dark text-danger" onClick={handleSiguiente}>Siguiente</button>
                </li>
                ): null}
            </ul>
        </nav>
    )
}

export default Paginacion
