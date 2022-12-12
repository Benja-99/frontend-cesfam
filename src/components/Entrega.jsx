import React from 'react';
import '../styles/login.css';
import Layout from './Layout';
import Navbar from './Navbar';

const Entrega = () => {
    return(
        <Layout>
            <Navbar></Navbar>
            <br />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Nombre Medicamento Entregado</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Nombre" aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Codigo</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Codigo" aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <button type="submit" className="btn btn-success">Agregar</button>
                    </div>
                    <div className='col-6 col-sm-4'>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Entrega;