import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ExtraHours from './pages/ExtraHours';
import Form from './pages/Form';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <div className="container-fluid px-0" style={{ backgroundColor: "#fff", backgroundRepeat: "repeat" }}>
                <div className='row m-0'>
                    <div className='col-md-2 px-0'>
                        <Sidebar />
                    </div>
                    <div className='col-md-10 mt-3' style={{ height: "100vh"}}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="extra_hour" element={<ExtraHours />} />
                            <Route path="form" element={<Form />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    </React.StrictMode>
);

