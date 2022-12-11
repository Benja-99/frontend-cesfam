import React from 'react';
import '../styles/login.css';
import Layout from './Layout';
import Navbar from './Navbar';

const Agregar = () => {
    return(
        <Layout>
            <Navbar></Navbar>
            <br />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Nombre Medicamento</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input class="form-control" type="text" placeholder="Nombre" aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Codigo</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input class="form-control" type="text" placeholder="Codigo" aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Descripcion</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input class="form-control" type="text" placeholder="Descripcion" aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Fabricante</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input class="form-control" type="text" placeholder="Fabricante" aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Tipo</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input class="form-control" type="text" placeholder="Tipo" aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Componentes</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input class="form-control" type="text" placeholder="Componentes" aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Contenido</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input class="form-control" type="text" placeholder="Contenido" aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Cantidad</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input class="form-control" type="text" placeholder="Cantidad" aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Gramaje</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input class="form-control" type="text" placeholder="Gramaje" aria-label="default input example"/>
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

export default Agregar;