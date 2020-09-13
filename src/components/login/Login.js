import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

const Login = () => {
  return (
    <div className="container ">
      <h1>Registrarse</h1>

      <Form>
        <Form.Row>
          <Form.Group as={Col } className="w-50%" controlId="formGridText">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Juan" />
          </Form.Group>

          <Form.Group as={Col} className="w-50%" controlId="formGridText">
            <Form.Label className="mx-3">Apellido</Form.Label>
            <Form.Control className="mx-3" type="text" placeholder="Perez" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridDireccion">
          <Form.Label>Direccion</Form.Label>
          <Form.Control placeholder="muñecas 541" />
        </Form.Group>

        <Form.Group controlId="formGridLocalidad">
          <Form.Label>Localidad</Form.Label>
          <Form.Control placeholder="Capital" />
        </Form.Group>

        
        <Form.Group controlId="formGridLocalidad">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control placeholder="4000" type="number"/>
        </Form.Group>

        
        <Form.Group controlId="formGridLocalidad">
          <Form.Label >Telefono</Form.Label>
          <Form.Control placeholder="154123543" type="text" />
        </Form.Group>


        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </div>
  );
};

export default Login;
