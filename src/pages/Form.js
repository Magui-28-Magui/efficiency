import React from 'react'

function Form() {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6">
                    <h4 className='fw-light mt-3 fw-bold'>Asistencias</h4>
                    <div className="mb-3 mt-4">
                        <label for="" className="form-label">Fecha</label>
                        <input type="date" className="form-control" id="" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Turno</label>
                        <select className="form-control">
                            <option value="1">---</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Planta</label>
                        <select className="form-control">
                            <option value="1">---</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Linea</label>
                        <select className="form-control">
                            <option value="1">---</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Operadores</label>
                        <input type="number" className="form-control" id="" placeholder="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h4 className='fw-light mt-3 fw-bold'>Movimientos</h4>
                    <div className="mb-3 mt-4">
                        <label for="" className="form-label">Cambio de linea</label>
                        <select className="form-control">
                            <option value="1">---</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">De planta</label>
                        <select className="form-control">
                            <option value="1">---</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">A planta</label>
                        <select className="form-control">
                            <option value="1">---</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Nueva linea</label>
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
                </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-danger ml-5" type="button">Guardar Cambios</button>
            </div>
        </div>
    )
}

export default Form;