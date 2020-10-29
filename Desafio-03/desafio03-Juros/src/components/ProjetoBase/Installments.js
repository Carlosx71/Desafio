import React from "react";
import Installment from "./Installment";

export default function Installments({ qty }) {
  console.log(qty)
  const myObject = { 'a': 1, 'b': 2, 'c': 3 }

  return (
    <div>
      {
      Object.keys(myObject).map((teste) => <div key={teste}>Oi mundo
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Card Title</span>
              contador
              <Installment />
            </div>
          </div>
        </div>
      </div>
      </div>)}
    </div>
  );
}


const styles = {
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };