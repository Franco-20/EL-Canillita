import React from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTiktok, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return (
        <section className="bg-light">
            <div className="bg-light container">
                <div className="row">
                    <div className="col-md-3 mt-5 text-center">
                        <a href="#"><p className="text-secondary">Términos y Condiciones</p></a>
                        <a href="#"><p className="text-secondary">Ayuda</p></a>
                        <a href="#"><p className="text-secondary">Más información</p></a>
                        <a href="#"><p className="text-secondary">Políticas de privacidad</p></a>
                    </div>
                    <div className="col-md-6 text-center mt-4">
                        <a href=""><img className="w-25" src="img/canillitaPrueba.png" alt="" /></a>
                        <div></div>
                        <Button variant="primary" href="/login" className="my-1 btn-lg">Suscribirse</Button>
                        <p>25 de Mayo 654, S.M. Tucumán
                    Tucumán (T4000DAN)</p>
                        <h4>Contacto</h4>
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "2em" }} icon={faWhatsapp} /></Button>
                        <Button variant="light" href="#" className="m-1"><FontAwesomeIcon style={{ fontSize: "2em" }} icon={faEnvelope} /></Button>
                    </div>
                    <div className="col-md-3 mb-3 mt-4 text-center">
                        <p className=" mt-3 text-center">Siguenos en nuestras Redes Sociales:</p>
                        <Button variant="light" href="https://www.tiktok.com/es/" target="_blank" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faTiktok} /></Button>
                        <Button variant="light" href="https://www.instagram.com" target="_blank" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faInstagram} /></Button>
                        <Button variant="light" href="https://www.facebook.com" target="_blank" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faFacebook} /></Button>
                        <Button variant="light" href="https://ar.linkedin.com/" target="_blank" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faLinkedin} /></Button>
                        <Button variant="light" href="https://twitter.com/?lang=es" target="_blank" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faTwitter} /></Button>
                        <Button variant="light" href="https://www.youtube.com/" target="_blank" className="m-1"><FontAwesomeIcon style={{ fontSize: "3em" }} icon={faYoutube} /></Button>
                    </div>
                </div>
            </div>
            <div className="bg-primary">
                <div className="p-1">
                    <h5 className="text-center text-secondary">&copy;<span> El Canillita</span> 2020 Todos los derechos reservados</h5>
                </div>

            </div>

        </section>
    );
};

export default Footer;