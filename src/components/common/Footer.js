import React from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return (
        <section className="bg-light">
            <div className="bg-light my-3 container-fluid">
                <div className="row">
                    <div className="col-md-3 my-5 p-2 text-center">
                        <a href="#"><p className="text-secondary my-4">Términos y Condiciones</p></a>
                        <a href="#"><p className="text-secondary">Ayuda</p></a>
                        <a href="#"><p className="text-secondary">Más información</p></a>
                        <a href="#"><p className="text-secondary">Políticas de privacidad</p></a>
                    </div>
                    <div className="col-md-6 text-center my-3">
                        <img className="w-25" src="img/canillitaPrueba.png" alt="" />
                        <p>25 de Mayo 654, S.M. Tucumán
                    Tucumán (T4000DAN)</p>
                        <h4>Contacto</h4>
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "2em" }} icon={faWhatsapp} /></Button>
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "2em" }} icon={faEnvelope} /></Button>
                    </div>
                    <div className="col-md-3 my-4 text-center">
                        <p className="my-4 py-4 text-center">Siguenos en nuestras Redes Sociales:</p>
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faInstagram} /></Button>
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faFacebook} /></Button>
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faLinkedin} /></Button>
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faTwitter} /></Button>
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faYoutube} /></Button>
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