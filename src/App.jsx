import React, { Component } from 'react'

import Componente from './'
import styleGlobal from './css/index.scss'

class App extends Component {
  render() {
    return (
      <Componente 
        style={ styleGlobal }
      />
    )
  }
}

export default App
