import React from "react";
import Card from "react-bootstrap/Card";


const Economía = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center">
        <strong>Economia</strong>
        <hr />
      </h1>
      <Card>
        <Card.Img
          variant="top"
          src=""
          alt="imagen de la noticia"
        />
        <Card.Body>
          <Card.Title>Titulo de la noticia.</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Economía;
