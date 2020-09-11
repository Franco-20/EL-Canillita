import React from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return (
        <section className="bg-light">
            <div className="bg-light my-3 container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "2em" }} icon={faInstagram} /></Button>
                    </div>
                    <div className="col-md-6 text-center">
                        <img className="w-25" src="img/canillitaPrueba.png" alt="" />
                        <p>25 de Mayo 654, S.M. Tucumán
                    Tucumán (T4000DAN)</p>
                    <h4>Contacto</h4>
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faWhatsapp} /></Button>
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faEnvelope} /></Button>
                    </div>
                    <div className="col-md-3 my-4">
                        <p className="my-4">Siguenos en nuestras Redes Sociales:</p>
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faInstagram} /></Button>
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faFacebook} /></Button>
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faLinkedin} /></Button>
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faTwitter} /></Button>
                    </div>
                </div>
            </div>
            <div className="bg-primary">
                <div className="p-4">
                    <h5 className="text-center text-secondary">&copy;<span> El Canillita</span> 2020 Todos los derechos reservados</h5>
                </div>

            </div>

        </section>
    );
};

export default Footer;