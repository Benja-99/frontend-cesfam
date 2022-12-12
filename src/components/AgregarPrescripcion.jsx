import React, { useState } from 'react';
import '../styles/login.css';
import Layout from './Layout';
import Navbar from './Navbar';
import { gql, useMutation } from '@apollo/client';


const ADD_PRESCIPCIONES = gql`
    mutation AddPrescripcion($input: PrescripcionInput) {
        addPrescripcion(input: $input) {
            id
        }
    }
`



const AgregarPrescripcion = () => {
    const [nomPaciente, setNomPaciente] = useState("")
    const [diagnostico, setDiagnostico] = useState("")
    const [medicamento, setMedicamento] = useState("")
    const [codMedicamento, setCodMedicamento] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [medico, setMedico] = useState("")
    const [fecha, setFecha] = useState("")
    const [cesfam, setCesfam] = useState("")
    
    const [addPrescripcion] = useMutation(ADD_PRESCIPCIONES)

    const handleSubmit = (e) => {
        e.preventDefault()
        const input = {
            medicamentos: [
                {nombre: medicamento, cantidad: parseInt(cantidad)}
            ],
            paciente: {
                nombre: nomPaciente
            },
            medico: {
                nombre: medico
            },
            fecha: fecha,
            cesfam: {
                nombre: cesfam
            }
        }
        addPrescripcion({variables: {input}})

        setCantidad('')
        setNomPaciente('')
        setDiagnostico('')
        setMedicamento('')
        setCodMedicamento('')
        setMedico('')
        setFecha('')
        setCesfam('')
    }

    return(
        <Layout>
            <Navbar></Navbar>
            <br />
            <form onSubmit={handleSubmit}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Nombre Paciente</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Nombre" value={nomPaciente} onChange={(e) => setNomPaciente(e.target.value)} aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Diagnostico</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Diagnostico" value={diagnostico} onChange={(e) => setDiagnostico(e.target.value)} aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Nombre Medicamento</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Nombre Medicamento" value={medicamento} onChange={(e) => setMedicamento(e.target.value)} aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Codigo Medicamento</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Codigo Medicamento" value={codMedicamento} onChange={(e) => setCodMedicamento(e.target.value)} aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Cantidad</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Nombre Medico</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Nombre medico" value={medico} onChange={(e) => setMedico(e.target.value)} aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Fecha</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="date" placeholder="Fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Nombre cesfam</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Nombre cesfam" value={cesfam} onChange={(e) => setCesfam(e.target.value)} aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-xl-4'>
                    </div>
                    <div className='col-6 col-xl-4'>
                        <button type="submit" className="btn btn-success">Agregar</button>
                    </div>
                    <div className='col-6 col-xl-4'>
                    </div>
                </div>
            </div>
            </form>
        </Layout>
    )
}

export default AgregarPrescripcion;