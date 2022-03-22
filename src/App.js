import React, {Component} from 'react';
import Menu from './components/Menu';

class App extends Component {

  render() {
    return (
      <>
        <Menu />
        <div className='container'>
          <h1>Bienvenidos</h1>
        </div>
      </>
    )
  }

}

export default App;
