import React, { Component } from 'react';
import Inputsalry from './components/salary/Inputsalry';
import Tribute from './components/salary/Tribute'
import Bar from './components/bar/Bar'
import './components/bar/bar.style.css';
import { calculateSalaryFrom } from './helpers/salary'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      bar1: 33,
      bar2: 33,
      bar3: 33,
      valueSalary: 0,
      baseINSS: 0,
      baseIRPF: 0,
      discountINSS: 0,
      discountIRPF: 0,
      netSalary: 0,

    };
  }


  handleChangeBar1 = event => {
    const bar1 = +event.target.value;
    const bar2 = 100 - bar1;
    const bar3 = 25;

    this.setState({ bar1, bar2, bar3 });
  };

  handleChangeBar2 = event => {
    const bar2 = +event.target.value;
    const bar3 = 25;
    const bar1 = 100 - bar2;

    this.setState({ bar1, bar2, bar3 });
  };

  handleChangeBar3 = event => {
    const bar2 = +event.target.value;
    const bar3 = 25;
    const bar1 = 100 - bar3;
    
    
    this.setState({ bar1, bar2, bar3 });
  };
  
  handleSetValue = (event) => {
    const {baseINSS, baseIRPF, discountINSS, discountIRPF, netSalary } = calculateSalaryFrom(event.target.value)
    this.setState({baseINSS, baseIRPF, discountINSS, discountIRPF, netSalary})

  }

  render() {
    const { bar1, bar2, bar3, valueSalary, baseINSS, baseIRPF, discountINSS, discountIRPF, netSalary } = this.state;
    const calculo = {
      baseINSS: baseINSS,
      baseIRPF: baseIRPF,
      discountINSS: discountINSS,
      discountIRPF: discountIRPF,
      netSalary: netSalary
    }

    return (
      <div className="container">
        <div className="App">
          <h1>React Salário</h1>
        </div>
        <Inputsalry value={valueSalary} setValue={this.handleSetValue} /> 
        <Tribute calculo={calculo}/> 
        <div className="row">
          {/* <h1>React barras</h1> */}
          <div className="row">
            <div className="input-field col s2">
              <input type="number" placeholder="Barra 1" value={bar1} onChange={this.handleChangeBar1} min="0" max="100" step="1" />
            </div>
            <div className="input-field col s2">
              <input type="number" placeholder="Barra 1" value={bar2} onChange={this.handleChangeBar2} min="0" max="100" step="1" />   
            </div>
          <div className="input-field col s2">
            <input type="number" placeholder="Barra 1" value={bar3} onChange={this.handleChangeBar3} min="0" max="100" step="1" />          
          </div>
          </div>
        </div>
        <div className="row">
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
            <Bar value={bar1} color="red" />
            <Bar value={bar2} color="green" />
            <Bar value={bar3} color="blue" />
          </div>
        </div>
      </div>
      );
  }
}
