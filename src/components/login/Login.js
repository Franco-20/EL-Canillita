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
          <Form.Group as={Col } className="mr-3" controlId="formGridText">
            <Form.Label Col lg="6" md="6" sm="6">Nombre</Form.Label>
            <Form.Control type="text" placeholder="Juan" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridText">
            <Form.Label  Col lg="6" md="6" sm="6">Apellido</Form.Label>
            <Form.Control className="mx-3" type="text" placeholder="Perez" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridCorreo">
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="pepito@gmail.com" />
        </Form.Group>

        <Form.Group controlId="formGridDireccion">
          <Form.Label>Direccion</Form.Label>
          <Form.Control placeholder="muñecas 541" />
        </Form.Group>

        <Form.Group controlId="formGridLocalidad">
          <Form.Label>Localidad</Form.Label>
          <Form.Control placeholder="Capital" />
        </Form.Group>

        
        <Form.Group controlId="formGridCodigoPostal">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control placeholder="4000" type="number"/>
        </Form.Group>

        
        <Form.Group controlId="formGridTelefono">
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
