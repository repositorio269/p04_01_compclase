import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <nav>
          <div>Logo</div>
          <ul>
              <a href={'.'} className='activo'>Inicio</a>
              <a href={'.'}>Ventas</a>
              <a href={'.'}>Soporte</a>
          </ul>
      </nav>
    )
  }
}
