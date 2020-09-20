import React, { useState} from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import { Button, Alert } from "react-bootstrap";
import Swal from 'sweetalert2';

const Login = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [telefono, setTelefono] = useState('');
  const [accept, setAcepto] = useState('');

  const [desvio, setDesvio] = useState(false);

  const sendEmail = e => {
    e.preventDefault();

    if (
     nombre.trim() === '' ||
     apellido.trim() === '' ||
    email.trim() === '' ||
     direccion.trim() === '' ||
     localidad.trim() === '' ||
     codigoPostal.trim() === '' ||
      telefono.trim() === '' ||
     accept === '') {
    
      setDesvio(true);
      return;
    }{
      Swal.fire("Bienvenido!", "A la brevedad responderemos tu solicitud", "success");

    }
    setDesvio(false)
  };
    
         

   
    


  return (
    <div className="fondosesion">
      <div className="container">
        <h1 className="py-3">Registrarse</h1>
        <h6 className="text-center pl-3 text-secondary">Todos los campos marcados con * son obligatorios.
      </h6>


        <Form className="shadow p-3 mb-5 rounded bg-light" noValidate validated={desvio}  onSubmit={sendEmail}>
        {desvio ? <Alert variant='danger'>Todos los campos con * son obligatorios</Alert> : null}
          <Form.Row>
            <Form.Group as={Col} className="mr-3" controlId="formGridText">
              <Form.Label Col lg="6" md="6" sm="6">Nombre*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Juan"
                name="nombre"
                onChange={(e) => setNombre(e.target.value)}

              />
              <Form.Control.Feedback>Ingreso datos correctos</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Debe de ingresar algun dato
          </Form.Control.Feedback>

            </Form.Group>

            <Form.Group as={Col} controlId="formGridText">
              <Form.Label Col lg="6" md="6" sm="6">Apellido*</Form.Label>
              <Form.Control
                required
                type="text"
                name="apellido"
                placeholder="Perez"
                onChange={(e) => setApellido(e.target.value)}

              />
              <Form.Control.Feedback>Ingreso datos correctos</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Debe de ingresar algun dato
          </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="inputGroupPrepend">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="pepito@gmail.com"
              onChange={(e) => setEmail(e.target.value)}

            />
            <Form.Control.Feedback>Ingreso datos correctos</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debe de ingresar un email valido ejemplo: perez@ejemplo.com
          </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formGridDireccion">
            <Form.Label>Direccion*</Form.Label>
            <Form.Control
              required
              name="direccion"
              placeholder="muñecas 541"
              onChange={(e) => setDireccion(e.target.value)}
            />
            <Form.Control.Feedback>Ingreso datos correctos</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debe de ingresar algun dato
          </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formGridLocalidad">
            <Form.Label>Localidad*</Form.Label>
            <Form.Control
              required
              name="localidad"
              type="text"
              placeholder="Capital"
              onChange={(e) => setLocalidad(e.target.value)}
            />
            <Form.Control.Feedback>Ingreso datos correctos</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debe de ingresar algun dato
          </Form.Control.Feedback>
          </Form.Group>


          <Form.Group controlId="formGridCodigoPostal">
            <Form.Label>Codigo Postal*</Form.Label>
            <Form.Control
              required
              name="codigopostal"
              placeholder="4000"
              type="number"
              onChange={(e) => setCodigoPostal(e.target.value)}
            />
            <Form.Control.Feedback>Ingreso datos correctos</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debe de ingresar algun dato numerico
          </Form.Control.Feedback>

          </Form.Group>


          <Form.Group controlId="formGridTelefono">
            <Form.Label >Telefono*</Form.Label>
            <Form.Control
              required
              name="telefono"
              placeholder="154123543"
              type="number"
              onChange={(e) => setTelefono(e.target.value)}
            />
            <Form.Control.Feedback>Ingreso datos correctos</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debe de ingresar algun dato numerico
          </Form.Control.Feedback>

          </Form.Group>
          <Form.Group>
            <Form.Check
              required
              label="Acepta términos y condiciones"
              feedback="You must agree before submitting."
              onChange={(e) => setAcepto(e.target.value)}
            />
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
