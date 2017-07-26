import React, { Component } from 'react'

import Prueba from './'
import styleGlobal from './css/index.scss'

class App extends Component {
  render() {
    return (
      <Prueba
        style={ styleGlobal }
      />
    )
  }
}

export default App
