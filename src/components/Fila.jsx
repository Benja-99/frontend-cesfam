import React from "react";
import { useMutation, gql } from '@apollo/client';

// const SUM_MEDICAMENTOS = gql`
//     mutation SumMedicamento($updateMedicamentoId: ID!, $input: MedicamentoInput) {
//         updateMedicamento(id: $updateMedicamentoId, input: $input) {
//             cantidad
//             nombre
//         }
//     }
// `
// function Sumar(id, cantidad){
//     const [sumMedicamento, { loading, error }] = useMutation(SUM_MEDICAMENTOS)

//     if (loading) return 'Submitting...'
//     if (error) return "Submission error!"

//     sumMedicamento({ variables: { cantidad: cantidad}})
    
// }
function mialerta3() {  
    alert("Paciente inscrito y reservado medicamento");
} 

class Fila extends React.Component {

    constructor(props){
        super()
        this.state = {
            count: parseInt(props.cantidad),
            isOpen: false
        }
        this.openSumar = this.openSumar.bind(this, true)
        this.closeSumar = this.closeSumar.bind(this, false)
        this.decrease = this.decrease.bind(this)
    }

    openSumar(){
        this.setState({isOpen : true})
    }

    closeSumar(){
        // Sumar(this.props.id, cantidad)
        this.setState({isOpen: false})
    }
    decrease(){
        this.setState({count: this.state.count - 1})
        alert("Restado 1 al stock!!");
    }

    
    
    render(){
        let cantidad
        return (
            <tr>
                <td>{this.props.nombre}</td>
                <td>{this.state.count}</td>
                <td>{this.props.codigo}</td>
                {this.state.isOpen ?
                    <>
                    <td><input type="number" value={cantidad}/></td>
                    <td><button type="submit" className="btn btn-success" onClick={this.closeSumar}> Sumar </button></td>
                    </>
                    
                :
                    <td><button type="submit" className="btn btn-success" onClick={this.openSumar}>Sumar</button></td>
                }
                
                <td><button type="submit" className="btn btn-danger" onClick={this.decrease}>Caducar</button></td>
            </tr>
        )
    }
}

class FilaPre extends React.Component {
    
    constructor(props){
        super()
        this.state = {
            allMedicamentos: "",
            allCantidad: ""
        }
        this.medicamentosUnion = this.medicamentosUnion.bind(this)
    }

    medicamentosUnion(){
        let unionMedicamentos = ""
        let unionCantidades = ""
        this.props.medicamento.map(({nombre, cantidad}) => {
            unionMedicamentos += nombre + " - "
            unionCantidades += cantidad.toString() + " - "
        })
        unionMedicamentos = unionMedicamentos.substring(0, unionMedicamentos.length - 3)
        unionCantidades = unionCantidades.substring(0, unionCantidades.length - 3)
        this.setState({allMedicamentos: unionMedicamentos})
        this.setState({allCantidad: unionCantidades})
    }
    render(){
        return (
            <tr>
                <td>{this.props.medico}</td>
                <td>{this.props.paciente}</td>
                {this.medicamentosUnion()}
                <td>{this.state.allMedicamentos}</td>
                <td>{this.state.allCantidad}</td>
                <td><button type="submit" className="btn btn-success" onClick={mialerta3}>Listo</button></td>
            </tr>
        )
    }
}

export {Fila, FilaPre};