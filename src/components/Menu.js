import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <nav>
          <div>Logo</div>
          <ul>
              <a className='activo'>Inicio</a>
              <a>Ventas</a>
              <a>Soporte</a>
          </ul>
      </nav>
    )
  }
}
