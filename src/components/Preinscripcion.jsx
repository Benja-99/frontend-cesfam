import React from 'react';
import '../styles/login.css';
import Layout from './Layout';
import Navbar from './Navbar';
import {PlusCircleIcon} from '@primer/octicons-react'

const Preinscripcion = () => {
    return (
        <Layout>
            <Navbar></Navbar>
            <div className='container-fluid'>
                <br />
                <div className='row'>
                    <div className='col'>
                        <h1 className="title">Agregar Preinscripcion</h1>
                    </div>
                    <div className='col'>
                        <a href="/agregarPre"><PlusCircleIcon size={16} /></a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Preinscripcion;