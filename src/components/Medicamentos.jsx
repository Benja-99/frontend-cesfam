import React from 'react';
import '../styles/login.css';
import Layout from './Layout';
import Navbar from './Navbar';
import { PlusCircleIcon} from '@primer/octicons-react'
import {datos, pre} from '../datos';
import {Fila, FilaPre} from './Fila';
import { gql } from 'apollo-server-express';
import { useQuery } from '@apollo/client';

const GET_MEDICAMENTOS = gql`
    query getMedicamentosQuery {
        getMedicamentos {
            cantidad
            codigo
            comp
            contenido
            desc
            fab
            gramaje
            id
            nombre
            tipo
        }
    }
`

function GetMedicamentos() {
    const { loading, error, data } = useQuery(GET_MEDICAMENTOS)

    if(loading) return null
    if(error) return `Error! ${error}`

    return data
}
const Medicamentos = () => {

    datos = GetMedicamentos()
    console.log(datos)
    return(
        <Layout>
            <Navbar></Navbar>
            <div className="container-fluid">
                <br />
                <div className='row'>
                    <div className='col'>
                        <h1 className="title">Agregar Medicamento</h1>
                    </div>
                    <div className='col'>
                        <a href="/agregar"><PlusCircleIcon size={16} /></a>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col'>
                        <h1 className="title">Agregar Entrega de Medicamento</h1>
                    </div>
                    <div className='col'>
                        <a href="/agregarEntrega"><PlusCircleIcon size={16} /></a>
                    </div>
                </div>
                <br />
                <h1>Stock de Medicamentos</h1>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Medicamento</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Codigo</th>
                        <th scope='col'></th>
                        <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datos.map(row => {
                                return (
                                    <Fila nombre={row.nombre} cantidad={row.stock} codigo={row.codigo}/>
                                )
                            })
                        }
                    </tbody>
                </table>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <button type="submit" class="btn btn-success">Generar Informe Medicamentos</button>
                    </div>
                    <div className='col-6 col-sm-4'>
                    </div>
                </div>
                <h1>Preinscripciones</h1>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Medico</th>
                        <th scope="col">Paciente</th>
                        <th scope="col">Medicamento</th>
                        <th scope="col">Cantidad</th>
                        <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pre.map(row => {
                                return (
                                    <FilaPre medico={row.medico} paciente={row.paciente} medicamento={row.medicamento} cantidad={row.cantidad}/>
                                )
                            })
                        }
                    </tbody>
                </table>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <button type="submit" class="btn btn-success">Generar Informe Preinscripciones</button>
                    </div>
                    <div className='col-6 col-sm-4'>
                    </div>
                </div>
            </div>
            <br />
        </Layout>
    )
}

export default Medicamentos;