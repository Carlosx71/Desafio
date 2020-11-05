import React, { Component } from 'react'
import { percent } from '../../helpers/percent'
export default class Tribute extends Component {
    render() {
        const { calculo } = this.props
        const { baseINSS, baseIRPF, discountINSS, discountIRPF, netSalary } = calculo;

        const percentDescInss = percent(baseINSS, discountINSS); 
        const percentDescIrpf = percent(baseINSS, discountIRPF); 
        const percentSalari = percent(baseINSS, netSalary); 

        return (
            <div className="row">
                <div className="row">
                    <div className="input-field col s2">
                        <label className="active" htmlFor="baseInss">Base INSS</label>
                        <input id="baseInss" placeholder="Base INSS" value={baseINSS} readOnly/>
                    </div>
                    <div className="input-field col s2">
                        <label className="active" htmlFor="descInss">Desconto INSS</label>
                        <input id="descInss" placeholder="Desconto INSS" readOnly value={ `R$: ${discountINSS} (${percentDescInss})`}/>
                    </div>
                    <div className="input-field col s2">
                        <label className="active" htmlFor="baseIrpf">Base IRPF</label>
                        <input id="baseIrpf" placeholder="Base IRPF" readOnly value={`R$: ${baseIRPF} (${percentDescIrpf})`}/>
                    </div>
                    <div className="input-field col s2">
                        <label className="active" htmlFor="descIrpf">Base INSS</label>
                        <input id="descIrpf" placeholder="Desconto IRPF" readOnly value={`${discountIRPF}`}/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s2">
                        <label className="active" htmlFor="baseInss">Base INSS</label>
                        <input placeholder="Salario Liquido" readOnly value={`${netSalary} (${percentSalari})`}/>
                    </div>
                </div>
            </div>
        )
    }
}
