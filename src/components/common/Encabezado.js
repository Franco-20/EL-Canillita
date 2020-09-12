import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandPointRight, faPlusSquare, faUser } from '@fortawesome/free-solid-svg-icons';
const Encabezado = () => {
    return (
        <Navbar bg="light" variant="light" expand="" sticky="top" >
            <section className="container">

                <Navbar.Toggle aria-controls="-navbar-nav" className="" />
                <Navbar.Brand href="/" className="text-center"><img src="img/canillitaPrueba.png" alt="" width="300" height="" /></Navbar.Brand>
                <div className="text-center">
                    <Button variant="primary" href="/Inicio de Sesion" className="m-1 btn-lg d-none d-sm-block" fixed="bottom"><FontAwesomeIcon style={{ fontSize: "2em" }} icon={faUser} /> Iniciar sesión</Button>
                    <Button variant="warning" href="/login" className="m-1 btn-lg d-none d-sm-block"><FontAwesomeIcon style={{ fontSize: "2em" }} icon={faHandPointRight} /> Suscribirse</Button>
                </div>
                <Navbar.Collapse id="basic-navbar-nav" className="header">
                    <Nav className="mr-auto">
                        <NavLink
                            exact={true}
                            to="/"
                            className="nav-link"
                            activeClassName="active"
                        >
                            Inicio
          </NavLink>
                        <NavLink
                            exact={true}
                            to="/actualidad"
                            className="nav-link"
                            activeClassName="active"
                        >
                            {" "}
            Actualidad
          </NavLink>
                        <NavLink
                            exact={true}
                            to="/deportes"
                            className="nav-link"
                            activeClassName="active"
                        >
                            Deportes
          </NavLink>
                        <NavLink
                            exact={true}
                            to="/economia"
                            className="nav-link"
                            activeClassName="active"
                        >
                            {" "}
            Economia
          </NavLink>
                        <NavLink
                            exact={true}
                            to="/espectaculos"
                            className="nav-link"
                            activeClassName="active"
                        >
                            {" "}
            Espectaculos
          </NavLink>
                        <NavLink
                            exact={true}
                            to="fotografia"
                            className="nav-link"
                            activeClassName="active"
                        >
                            {" "}
            Fotografía
          </NavLink>
                        <NavLink
                            exact={true}
                            to="/politica"
                            className="nav-link"
                            activeClassName="active"
                        >
                            {" "}
            Política
          </NavLink>
                        <NavLink
                            exact={true}
                            to="/salud"
                            className="nav-link"
                            activeClassName="active"
                        >
                            {" "}
            Salud
          </NavLink>
                        <NavLink
                            exact={true}
                            to="/tecnologia"
                            className="nav-link"
                            activeClassName="active"
                        >
                            {" "}
            Tecnologia
          </NavLink>
                    </Nav>
                    <Button variant="primary" href="/Inicio de Sesion" className="m-1 d-block d-sm-none" fixed="bottom"><FontAwesomeIcon style={{ fontSize: "1em" }} icon={faUser} /> Iniciar sesión</Button>
                    <Button variant="warning" href="/login" className="m-1 d-block d-sm-none"><FontAwesomeIcon style={{ fontSize: "1em" }} icon={faHandPointRight} /> Suscribirse</Button>
                </Navbar.Collapse>


            </section>
        </Navbar>
    );
};

export default Encabezado;