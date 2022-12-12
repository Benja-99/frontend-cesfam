import React from 'react';
import '../styles/login.css';
import Layout from './Layout';
import Navbar from './Navbar';
import {PlusCircleIcon} from '@primer/octicons-react'
import { useQuery, gql } from '@apollo/client';
import { FilaPre } from "./Fila"

const GET_PRESCRIPCIONES = gql`
    query getPrescripcionesQuery {
        getPrescripciones {
            cesfam {
              nombre
            }
            id
            medicamentos {
              nombre
              cantidad
            }
            medico {
              nombre
            }
            paciente {
              nombre
            }
          }
    }
`

function DisplayPrescripciones(){
    const { loading, error, data } = useQuery(GET_PRESCRIPCIONES)
    if(loading) return null
    if(error) return `Error! ${error}`
    return data.getPrescripciones.map(({ cesfam, id, medicamentos, medico, paciente}) => (
        <FilaPre medico={medico.nombre} paciente={paciente.nombre} medicamento={medicamentos}/>
    ))

}

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
                <h1>Preinscripciones</h1>
                <table className="table">
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
                            DisplayPrescripciones()
                            // pre.map(row => {
                            //     return (
                            //         <FilaPre medico={row.medico} paciente={row.paciente} medicamento={row.medicamento} cantidad={row.cantidad}/>
                            //     )
                            // })
                        }
                    </tbody>
                </table>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <button type="submit" className="btn btn-success">Generar Informe Preinscripciones</button>
                    </div>
                    <div className='col-6 col-sm-4'>
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}

export default Preinscripcion;