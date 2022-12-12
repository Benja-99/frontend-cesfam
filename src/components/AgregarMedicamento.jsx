import { useMutation, gql } from '@apollo/client';
import React from 'react';
import { useState } from 'react';
import '../styles/login.css';
import Layout from './Layout';
import Navbar from './Navbar';
import { Redirect } from "react-router-dom";


const ADD_MEDICAMENTOS = gql`
    mutation AddMedicamento($input: MedicamentoInput) {
        addMedicamento(input: $input) {
            cantidad
            nombre
            codigo
        }
    }
`

const AgregarMedicamento = () => {
    const [nombre, setNombre] = useState("")
    const [codigo, setCodigo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [fabricante, setFabricante] = useState("")
    const [tipo, setTipo] = useState("")
    const [componentes, setComponentes] = useState("")
    const [contenido, setContenido] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [gramaje, setGramaje] = useState("")
    
    const [addMedicamento] = useMutation(ADD_MEDICAMENTOS)



    const handleSubmit = (e) => {
        e.preventDefault()
        const input = {
            nombre: nombre,
            codigo: codigo,
            desc: descripcion,
            fab: fabricante,
            tipo: tipo,
            comp: componentes,
            contenido: contenido,
            cantidad: parseInt(cantidad),
            gramaje: parseInt(gramaje)
        }
        addMedicamento({ variables: { input }})

        setNombre('')
        setCodigo('')
        setDescripcion('')
        setFabricante('')
        setTipo('')
        setComponentes('')
        setContenido('')
        setCantidad('')
        setGramaje('')
    }

        // console.log("wea");
        // if (loading) console.log("Submitting")
        // if (error) console.log(`Submission error! ${error.message}`);
        // await addMedicamento({variables: {nombre: nombre, codigo: codigo, descripcion: descripcion, fabricante: fabricante, tipo: tipo, componentes: componentes, contenido: contenido, cantidad: cantidad, gramaje: gramaje}})
        // await console.log(data);
    return(
        <Layout>
            <Navbar></Navbar>
            <br />
            <form onSubmit={handleSubmit}>
            <div className='container-fluid'>
                
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Nombre Medicamento</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Codigo</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Descripcion</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Fabricante</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Fabricante" value={fabricante} onChange={(e) => setFabricante(e.target.value)} aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Tipo</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Componentes</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Componentes" value={componentes} onChange={(e) => setComponentes(e.target.value)} aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                        <h2 className='title'>Contenido</h2>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <input className="form-control" type="text" placeholder="Contenido" value={contenido} onChange={(e) => setContenido(e.target.value)} aria-label="default input example"/>
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
                    <div className='col-6 col-lg-4'>
                        <h2 className='title'>Gramaje</h2>
                    </div>
                    <div className='col-6 col-lg-4'>
                        <input className="form-control" type="text" placeholder="Gramaje" value={gramaje} onChange={(e) => setGramaje(e.target.value)} aria-label="default input example"/>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6 col-sm-4'>
                    </div>
                    <div className='col-6 col-sm-4'>
                        <button type="submit" className="btn btn-success" >Agregar</button>
                    </div>
                    <div className='col-6 col-sm-4'>
                    </div>
                </div>
            </div>
            </form>
        </Layout>
    )
}

export default AgregarMedicamento;