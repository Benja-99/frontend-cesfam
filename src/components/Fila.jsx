import React from "react";



function mialerta3() {  
    alert("Paciente inscrito y reservado medicamento");
} 

class Fila extends React.Component {

    constructor(props){
        super()
        this.state = {
            count: parseInt(props.cantidad)
        }
        // this.setState({count: this.props.cantidad})
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }

    increase(){
        this.setState({count: this.state.count + 1})
        alert("Sumado 1 al stock!!");
    }

    decrease(){
        this.setState({count: this.state.count - 1})
        alert("Restado 1 al stock!!");
    }

    
    render(){
        return (
            <tr>
                <td scope="row">{this.props.nombre}</td>
                <td>{this.state.count}</td>
                <td>{this.props.codigo}</td>
                <td><button type="submit" class="btn btn-success" onClick={this.increase}>Sumar</button></td>
                <td><button type="submit" class="btn btn-danger" onClick={this.decrease}>Caducar</button></td>
            </tr>
        )
    }
}

class FilaPre extends React.Component {
    render(){
        return (
            <tr>
                <td scope="row">{this.props.medico}</td>
                <td>{this.props.paciente}</td>
                <td>{this.props.medicamento}</td>
                <td>{this.props.cantidad}</td>
                <td><button type="submit" class="btn btn-success" onClick={mialerta3}>Listo</button></td>
            </tr>
        )
    }
}

export {Fila, FilaPre};