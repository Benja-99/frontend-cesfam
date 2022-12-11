import './App.css';
import React from 'react';
import Medicamentos from './components/Medicamentos';
import Home from './components/Home';
import Agregar from './components/agregar';
import Preinscripcion from './components/Preinscripcion';
import Entrega from './components/Entrega';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PreEntrega from './components/agregarPre';
import Recetas from './components/recetas';


class App extends React.Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/Medicamentos" component={Medicamentos}/>
          <Route exact path="/agregar" component={Agregar}/>
          <Route exact path="/Preinscripcion" component={Preinscripcion}/>
          <Route exact path="/agregarEntrega" component={Entrega}/>
          <Route exact path="/agregarPre" component={PreEntrega}/>
          <Route exact path="/Recetas" component={Recetas}/>
        </Switch>
      </Router>
      
    );
  }
}

export default App;
