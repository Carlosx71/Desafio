import React, { Component } from 'react'

export default class Tribute extends Component {
    render() {
        return (
            <div class="row">
                <div class="row">
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
                <div class="row">
                    <div className="input-field col s2">
                        <input placeholder="Desconto IRPF"/>
                    </div>
                </div>
            </div>
        )
    }
}
