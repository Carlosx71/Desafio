import React, { Component } from 'react'

export default class Inputsalry extends Component {

    
    render() {
        const { onChange } = this.props
        return (
            <div className="row">
                <div className="input-field col s5">
                    <label className="active" htmlFor="salario">Salário</label>
                    <input id="salario" type="number" onChange={onChange} id="quantity" name="quantity" min="0" />
                </div>
            </div>
        )
    }
}
