import React from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

const Sesion = () => {
  return (
    <div className="container ">
      <h1 className="text-center" id="titulolog">Inicia sesion</h1>      
      <Form>
   
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email-" placeholder="Ingrese su correo" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" />
        </Form.Group>
        
      </Form>
      
      <Button variant="primary" type="submit">
            Ingresar
        </Button>
      
    </div>
  );
};

export default Sesion;
