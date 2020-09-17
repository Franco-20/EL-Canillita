import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";

const Sesion = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //validacion
    if (correo.trim() === "" || contraseña.trim() === "") {
      setError(true);
      return;
    } else {
      Swal.fire("Bienvenido!", "Inicio de sesion correcto!", "success");
    }

    //eliminar el error previo
    setError(false);
  };

  return (
    <div className="fondosesion justify-content-center">
      <div className="container">
        <article className="justify-content-center my-1">
          <div>
            <h1 className="text-center" id="titulolog">
              Inicia sesion
            </h1>
            {error ? (
              <Alert variant={"danger"}>
                Todos los campos son obligatorios
              </Alert>
            ) : null}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email-"
                  placeholder="ejemplo@gmail.com"
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                  onChange={(e) => setContraseña(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="my-3">
                Ingresar
              </Button>
              <Button variant="secondary" type="submit" className="mx-4 my-3">
                Olvidaste tu contraseña?
              </Button>
            </Form>

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
