import React from 'react';
import { FcFactoryBreakdown } from 'react-icons/fc';

function Home() {
    return (
        <div className='container mt-5' style={{ paddingTop: "3rem" }}>
            <div className='row'>
                <div className='col-4 mx-5 w-25 bg-white shadow-lg p-3'>
                    <div className='row'>
                        <div className='col-md-6 text-center'>
                            <FcFactoryBreakdown size={60} />
                        </div>
                        <div className='col-md-6 text-center'>
                            <h5 className='fw-bold'>Planta 1</h5>
                            <h3 className='fw-light'>300</h3>
                        </div>
                    </div>
                </div>
                <div className='col-4 mx-5 w-25 bg-white shadow-lg p-3'>
                    <div className='row'>
                        <div className='col-md-6 text-center'>
                            <FcFactoryBreakdown size={60} />
                        </div>
                        <div className='col-md-6 text-center'>
                            <h5 className='fw-bold'>Planta 2</h5>
                            <h3 className='fw-light'>100</h3>
                        </div>
                    </div>
                </div>
                <div className='col-4 mx-5 w-25 bg-white shadow-lg p-3'>
                    <div className='row'>
                        <div className='col-md-6 text-center'>
                            <FcFactoryBreakdown size={60} />
                        </div>
                        <div className='col-md-6 text-center'>
                            <h5 className='fw-bold'>Planta 3</h5>
                            <h3 className='fw-light'>40</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;