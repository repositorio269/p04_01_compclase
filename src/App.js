import React, {Component} from 'react';
import Menu from './components/Menu';
import ClientesDashboard from './pages/ClientesDashboard';

class App extends Component {

  render() {
    return (
      <>
        <Menu />
        <ClientesDashboard />
      </>
    )
  }

}

export default App;
