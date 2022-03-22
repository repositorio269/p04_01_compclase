import React, { Component } from 'react';
import Menu from './components/Menu';
import ClientesDashboard from './pages/ClientesDashboard';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clientes: [
        { nombre: 'Gas Natural', cif: 'A12345678' },
        { nombre: 'Iberdrola', cif: 'A87654321' },
        { nombre: 'Jazztel', cif: 'B12345678' },
        { nombre: 'BBVA', cif: 'C12345678' },
      ],
      titulo: 'Listado de clientes'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({clientes: [...this.state.clientes, {nombre: 'Orange', cif: 'A16876871'}]})
    }, 3000);
  }

  render() {
    return (
      <>
        <Menu />
        <ClientesDashboard clientes={this.state.clientes} titulo={this.state.titulo}/>
      </>
    )
  }

}

export default App;
