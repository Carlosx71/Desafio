import React, { useState, useEffect } from 'react';
import Forms from './components/Forms';
import Installments from './components/ProjetoBase/Installments';

export default function App() {
  const [ installment, setInstallment ] = useState(0)
  console.log(installment);

  const handleChangeValue = (value) => {
    console.log("será que deu bom");
    setInstallment(value)
  }

  return (
    <div className="container">
      <h1 className="center">React - Juros Cempostos</h1>
      <Forms onChangePar={handleChangeValue}/>
      <Installments qty={installment}/>
    </div>
  );
}
