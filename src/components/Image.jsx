import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'

// Class component
class Image extends Component {

  render() {
    return <img src={logo} className="App-logo" alt="logo" />
  }

}

export default Image;