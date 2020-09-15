import React from "react";
import ApiClimaMoneda from "./ApiClimaMoneda";
import Card from "react-bootstrap/Card";

const Inicio = () => {
  return (
    <div>
      <ApiClimaMoneda />
      <div className="container">
          <article className="text-center">
            <img src={process.env.PUBLIC_URL + "virus.gif"} alt=""/>
          </article>
        
      </div>
    </div>
  );
};

export default Inicio;
