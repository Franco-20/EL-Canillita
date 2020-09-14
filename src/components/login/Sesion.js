import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Sesion = () => {
  return (
    <div className="fondosesion justify-content-center">
      <div className="container">
        <article className="justify-content-center my-1">
          <div>
            <h1 className="text-center" id="titulolog">
              Inicia sesion
            </h1>
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email-" placeholder="Ingrese su correo" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                />
              </Form.Group>
            </Form>

            <Button variant="primary" type="submit" className="my-3">
              Ingresar
            </Button>
            <Button variant="secondary" type="submit" className="mx-4 my-3">
              Olvidaste tu contraseña?
            </Button>
           

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
                  <Button variant="primary" type="submit" size="lg"className="mx-5">
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
