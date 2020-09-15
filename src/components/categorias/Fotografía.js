import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const Fotografía = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center">
        <strong>Fotografia</strong>
        <hr/>
      </h1>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" alt="error,imagen mal cargada" />
          <Card.Body>
            <Card.Title>Titulo de la foto</Card.Title>
            <Card.Text>
              Redactar una pequeña reseña
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Hace 1 Hs</small>
          </Card.Footer>
        </Card>
        
      </CardDeck>
    </div>
  );
};

export default Fotografía;
