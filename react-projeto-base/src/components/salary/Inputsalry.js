import React, { Component } from 'react'

export default class Inputsalry extends Component {

    
    render() {
        const { setValue } = this.props
        return (
            <div className="row">
                <div className="input-field col s5">
                    <label className="active" htmlFor="salario">Salário</label>
                    <input id="salario" type="number" onChange={setValue} name="quantity" min="0" />
                </div>
            </div>
        )
    }
}
