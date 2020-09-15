import React from "react";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AgregarNoticias = () => {
  return (
    <section className="container">
      <Form>
        <h1 className="text-center my-5">Agregar Nueva Noticia</h1>
        <FormGroup controlId="noticiaId">
          <Form.Label>Titulo Noticia *</Form.Label>
          <FormControl
            type="text"
            placeholder=" Aumenta el Dolar oficial"
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="resumenNoticia">
          <Form.Label>Resumen de la Noticia *</Form.Label>
          <FormControl
            type="text"
            placeholder=" Leve aumento en la moneda verde"
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="detalleNoticia">
          <Form.Label> Detalle de la Noticia *</Form.Label>
          <FormControl
            type="text"
            placeholder="mfksfmvlxkfgldkglsfspflsgnsgmlfg"
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="imagenNoticia">
          <Form.Label> Imagen principal *</Form.Label>
          <FormControl
            type="url"
            placeholder="https://images.app.goo.gl/hQgPVvUBRqcUG3m26"
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="imagenNoticia2">
          <Form.Label> Imagen secundaria</Form.Label>
          <FormControl
            type="url"
            placeholder="https://images.app.goo.gl/hQgPVvUBRqcUG3m26"
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="autorNoticia">
          <Form.Label> Autor</Form.Label>
          <FormControl type="text" placeholder="Franco O."></FormControl>
        </FormGroup>

        <FormGroup controlId="fechaNoticia">
          <Form.Label>Fecha</Form.Label>
          <FormControl type="number" placeholder="20/09/20"></FormControl>
        </FormGroup>

        <h3 className="text-center">Categoria</h3>
        <div className="text-center my-4">
          <Form.Check
            type="radio"
            label="Actualidad"
            value="actualidad"
            inline
            name="categoria"
          />
          <Form.Check
            type="radio"
            label="Deportes"
            value="deportes"
            inline
            name="categoria"
          />
          <Form.Check
            type="radio"
            label="Espectaculos"
            value="espectaculos"
            inline
            name="categoria"
          />
          <Form.Check
            type="radio"
            label="Tecnologia"
            value="tecnologia"
            inline
            name="categoria"
          />
          <Form.Check
            type="radio"
            label="Politica"
            value="politica"
            inline
            name="categoria"
          />
          <Form.Check
            type="radio"
            label="Economia"
            value="economia"
            inline
            name="categoria"
          />
          <Form.Check
            type="radio"
            label="Salud"
            value="salud"
            inline
            name="categoria"
          />
          <Form.Check
            type="radio"
            label="Fotografia"
            value="fotografia"
            inline
            name="categoria"
          />
        </div>
        <div className="text-center lead">
        <Form.Group controlId="principalId">
          <Form.Check type="checkbox" label="Publicar en principal" />
        </Form.Group>
        </div>
        <Button variant="primary" type="submit" className="w-100">
          Agregar
        </Button>
      </Form>
    </section>
  );
};

export default AgregarNoticias;
