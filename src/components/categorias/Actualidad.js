import React from "react";
import Card from "react-bootstrap/Card";

const Actualidad = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center">
        <strong>Actualidad</strong>
      </h1>
      <hr />
      <Card>
        <Card.Img
          variant="top"
          src="holder.js/100px180"
          alt="imagen de la noticia"
        />
        <Card.Body>
          <Card.Title>Titulo de la noticia.</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Actualidad;
