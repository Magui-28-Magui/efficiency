import React from 'react';

function ExtraHours() {
    return (
        <div className="container col-md-6 mt-5">
            <h4 className='fw-light mt-3 fw-bold'>Tiempo extra</h4>
            <div className="mb-3 mt-4">
                <label for="" className="form-label">Tiempo extra de linea</label>
                <select className="form-control">
                    <option value="1">---</option>
                </select>
            </div>
            <div className="mb-3">
                <label for="" className="form-label">Operadores</label>
                <input type="number" className="form-control" id="" placeholder="" />
            </div>
            <div className="mb-3">
                <label for="" className="form-label">Cantidad de horas</label>
                <input type="number" className="form-control" id="" placeholder="" />
            </div>
            <div className="mb-3">
                <label for="" className="form-label">En planta</label>
                <select className="form-control">
                    <option value="1">---</option>
                </select>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-danger ml-5" type="button">Guardar Cambios</button>
            </div>
        </div>
    )
}

export default ExtraHours;