import React, {useState} from "react";
import Form from "react-bootstrap/Form";

import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";

const Sesion = () => {
  //state para iniciar sesion
   const [usuario, guardaUsuario] = useState({
    email:'',
    contraseña:''
   });

   //extraer de usuario email y contraseña
   const{email, contraseña} = usuario;

  const onChange = e =>{
    guardaUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }

  //cuando el ususario quiere iniciar sesion
  const onSubmit = e =>{
    e.preventDefault();

    //validar que no haya campos vacios

    //pasarlo al action 
  }

  return (
    <div className="">
      <div className="container">
        <article className="justify-content-center my-1">
          <div>
            <h1 className="text-center" id="titulolog">
              Iniciar Sesion
            </h1>

            <Form onSubmit={onSubmit}>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email-"
                  placeholder="Ingrese email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                required
                  type="password"
                  placeholder="Ingrese su contraseña"
                  id="contraseña"
                  name="contraseña"
                  value={contraseña}
                  onChange={onChange}
                ></Form.Control>
              </Form.Group>

              <Button variant="primary" className="my-3" type="submit">
                Ingresar
              </Button>
            </Form>
              <Link to={'/recuperar-clave'} variant="secondary" type="submit" className="mx-4 my-3">
                Olvidaste tu contraseña?
              </Link>
            <section className="">
              <h1 className="text-center mx-3">
                Puedes ingresar con tus redes sociales
              </h1>
              <article className="botonsesion">
                <a href="https://www.gmail.com/" label>
                  <Button
                    variant="danger"
                    type="submit"
                    size="lg"
                    className="mx-5 "
                  >
                    Gmail
                  </Button>
                </a>
                <a href="https://www.facebook.com/" label>
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="mx-5"
                  >
                    facebook
                  </Button>
                </a>
              </article>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Sesion;
