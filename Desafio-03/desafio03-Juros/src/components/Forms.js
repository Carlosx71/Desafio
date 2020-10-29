import React from "react";

export default function Forms({ onChangePar }) {

    const handleChange = (event) => {
        // console.log(onChangePar)
        onChangePar(+event.target.value)
        // setInstallment(+event.target.value)
    }


  return (
    <div className="center">
      <div className="row">
        <div className="input-field col s4">
          <label className="active" htmlFor="startCap">
            Capital Inicial
          </label>
          <input id="startCap" name="startCap" type="number" min="0" />
        </div>
        <div className="input-field col s4">
          <label className="active" htmlFor="taxJuros">
            Taxa de Juros
          </label>
          <input id="taxJuros" name="taxJuros" type="number" min="0" />
        </div>
        <div className="input-field col s4">
          <label className="active" htmlFor="periodo">
            Períodos (Meses)
          </label>
          <input
            id="periodo"
            name="periodo"
            type="number"
            min="0"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
