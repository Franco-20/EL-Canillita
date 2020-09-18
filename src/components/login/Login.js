import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card'

const Login = () => {
  const[datos, setDatos] = useState({
    nombre: '',
    apellido: ''
  })
  const handleInputChange = (e) =>{
    //console.log(e.target.value);
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }
  const enviarDatos = (e) => {
    e.preventDefault();
    e.target.reset();
  }


  return (
    <div className="fondosesion">
    <div className="container">
      <h1 className="py-3">Registrarse</h1>
      <h6 className="text-center pl-3 text-secondary">Todos los campos marcados con * son obligatorios.
      </h6>
      

      <Form className="shadow p-3 mb-5 rounded bg-light" onSubmit={enviarDatos}>
        <Form.Row>
          <Form.Group as={Col } className="mr-3" controlId="formGridText">
            <Form.Label Col lg="6" md="6" sm="6">Nombre*</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Juan" 
            name="nombre"
            onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridText">
            <Form.Label  Col lg="6" md="6" sm="6">Apellido*</Form.Label>
            <Form.Control 
            className="mx-3" 
            type="text" 
            placeholder="Perez"
            name="apellido"
            onChange={handleInputChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridCorreo">
          <Form.Label>Email*</Form.Label>
          <Form.Control 
          type="email"
          placeholder="pepito@gmail.com" />
        </Form.Group>

        <Form.Group controlId="formGridDireccion">
          <Form.Label>Direccion*</Form.Label>
          <Form.Control 
          placeholder="muñecas 541" />
        </Form.Group>

        <Form.Group controlId="formGridLocalidad">
          <Form.Label>Localidad*</Form.Label>
          <Form.Control 
          type="text"
          placeholder="Capital" />
        </Form.Group>

        
        <Form.Group controlId="formGridCodigoPostal">
          <Form.Label>Codigo Postal*</Form.Label>
          <Form.Control placeholder="4000" type="number"/>
        </Form.Group>

        
        <Form.Group controlId="formGridTelefono">
          <Form.Label >Telefono*</Form.Label>
          <Form.Control placeholder="154123543" type="text" />
        </Form.Group>


        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default Login;
