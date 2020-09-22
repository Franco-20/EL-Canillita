import React from 'react';
import { Form, FormGroup, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";



const EditarCategorias = () => {
    const [error, setError] = useState(false);

    return (
        <section className="container mb-5">
        <Form >
          <h1 className="text-center my-5">Agregar Nueva Categoria</h1>
          {error === true ? (
            <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
          ) : null}
          <FormGroup controlId="categoriaId">
            <Form.Label> Nombre Categoria *</Form.Label>
            <FormControl
              type="text"
              placeholder=" Deportes"
            
            ></FormControl>
          </FormGroup>
  
          <Button variant="primary" type="submit" className="w-100">
            Agregar
          </Button>
        </Form>
      </section>
    );
};

export default EditarCategorias;