import React, { Component } from 'react'

export default class Tribute extends Component {
    render() {
        return (
            <div className="row">
                <div className="row">
                    <div className="input-field col s2">
                        <input placeholder="Base INSS"/>
                    </div>
                    <div className="input-field col s2">
                        <input placeholder="Desconto INSS"/>
                    </div>
                    <div className="input-field col s2">
                        <input placeholder="Base IRPF"/>
                    </div>
                    <div className="input-field col s2">
                        <input placeholder="Desconto IRPF"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s2">
                        <input placeholder="Salario Liquido"/>
                    </div>
                </div>
            </div>
        )
    }
}
