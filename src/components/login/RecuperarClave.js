import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import AutenContext from "../../components/login/autenticacion/AutenContext"

const RecuperarClave = () => {
    //state para iniciar sesion
    const [usuario, guardaUsuario] = useState({
        email: "",
        contraseña: "",
        confirmar: "",
    });
    const [error, setError] = useState(false);
     
    const AutenContext = useContext(AutenContext);
    const{registrarUsuario} = AutenContext;
    
    //extraer de usuario email y contraseña
    const { email, contraseña, confirmar } = usuario;

    const onChange = (e) => {
        guardaUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };

    //cuando el ususario quiere iniciar sesion
    const onSubmit = (e) => {
        e.preventDefault();

        //validar que no haya campos vacios
        if (
            email.trim() === "" ||
            contraseña.trim() === "" ||
            confirmar.trim() === ""
        ) {
            setError(true);
            return;
        }
        setError(false);
        //contraseña minimo de 6 caracteres

    };

    //las dos contraseñas iguales

    //pasarlo al action
    registrarUsuario({
        email,contraseña
    })


return (
    <div className="fondosesion justify-content-center">
        <div className="container">
            <article className="justify-content-center my-1">
                <div>
                    <h1 className="text-center" id="titulolog">
                        Recuperar Clave
            </h1>
                    {error === true ? (
                        <Alert variant={"danger"}>
                            todos los campos son obligatorios
                        </Alert>
                    ) : null}
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
                                type="password"
                                placeholder="Ingrese su contraseña"
                                id="contraseña"
                                name="contraseña"
                                value={contraseña}
                                onChange={onChange}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Confirmar Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Repita su contraseña"
                                id="confirmar"
                                name="confirmar"
                                value={confirmar}
                                onChange={onChange}
                            ></Form.Control>
                        </Form.Group>

                        <Button variant="primary" className="my-3" type="submit">
                            Registrarme
              </Button>
                    </Form>
                    
                    <Link
                        to={"/Inicio de Sesion"}
                        variant="secondary"
                        type="submit"
                        className="mx-4 my-3"
                    >
                        Regresar a Iniciar Sesion
            </Link>
                </div>
            </article>
        </div>
    </div>
);
};

export default RecuperarClave;
