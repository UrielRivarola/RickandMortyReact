import React from 'react'

function Personajes({personajes = []}) {
    return (
        <div className="row">
            {
                personajes.map((item, index) => (
                    <div key={index} className="col p-2">
                        <div className="card d-flex h-100 w-100 bg-dark">
                            <div className="card-body text-light border border-danger rounded">
                                <div className="d-flex justify-content-center">
                                <img src={item.image} alt="" className="rounded"/>
                                </div>
                                <div>
                                    <h5 className="card-title text-center pt-3">{item.name}</h5>
                                    <hr className="text-danger"/>
                                    <p>Estatus: {item.status}</p>
                                    <p>Especie: {item.species}</p>
                                    <p>Origen: {item.origin.name}</p>
                                    <p>Locación actual: {item.location.name}</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                ))}
        </div>
    );
};

export default Personajes
