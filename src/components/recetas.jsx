import React from 'react';
import '../styles/login.css';
import Layout from './Layout';
import Navbar from './Navbar';
import { PlusCircleIcon } from '@primer/octicons-react'

const Recetas = () => {
    return(
        <Layout>
            <Navbar></Navbar>
            <br />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Nombre Paciente</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input class="form-control" type="text" placeholder="Nombre" aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Diagnostico</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input class="form-control" type="text" placeholder="Diagnostico" aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Medicamentos</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <a href=""><PlusCircleIcon size={16} /></a>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <button type="submit" class="btn btn-success">Agregar</button>
                    </div>
                    <div className='col-6 col-sm-4'>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Recetas;