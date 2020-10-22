import React, { Component } from 'react';
// import ProjetoBase from './components/ProjetoBase/ProjetoBase';
import Inputsalry from './components/salary/Inputsalry';
import Tribute from './components/salary/Tribute'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>React Salário</h1>
        <Inputsalry /> 
        <Tribute /> 
      </div>
      );
  }
}
