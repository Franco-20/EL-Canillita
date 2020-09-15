import React from 'react';
import ImagenUno from '../assents/img/quema.jpg';
import ImagenDos from '../assents/img/manzur-gastona.jpg';
import ImagenTres from '../assents/img/cloacas.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Fotografía = () => {
    return (
        <>
            <h1 className="my-4 text-center"><strong>Postales de Tucumán</strong></h1>
            <section className="galeria">
                <a className="efecto" href="#quema.jpg"><img className="imagen" src={ImagenUno} alt="Quema de cañaveral" /></a>
                <a className="efecto" href="#manzur-gastona.jpg"><img className="imagen" src={ImagenDos} alt="manzur" /></a>
                <a className="efecto" href="#cloacas.jpg"><img className="imagen" src={ImagenTres} alt="cloacas" /></a>
            </section>
            
            <article className="light-box" id="quema.jpg">
                <a href="#cloacas.jpg" className="next"><FontAwesomeIcon icon={faArrowLeft} /></a>
                <img src={ImagenUno} alt="" />
                <a href="#manzur-gastona.jpg" className="next"><FontAwesomeIcon icon={faArrowRight} /></a>
                <a href="#" className="close">x</a>
            </article>

            <article className="light-box" id="manzur-gastona.jpg">
                <a href="#quema.jpg" className="next"><FontAwesomeIcon icon={faArrowLeft} /></a>
                <img src={ImagenDos} alt="" />
                <a href="#cloacas.jpg" className="next"><FontAwesomeIcon icon={faArrowRight} /></a>
                <a href="#" className="close">x</a>
            </article>

            <article className="light-box" id="cloacas.jpg">
                <a href="#manzur-gastona.jpg" className="next"><FontAwesomeIcon icon={faArrowLeft} /></a>
                <img src={ImagenTres} alt="" />
                <a href="#quema.jpg" className="next"><FontAwesomeIcon icon={faArrowRight} /></a>
                <a href="#" className="close">x</a>
            </article>

            <article className="light-box" id="quema.jpg">
                <a href="#cloacas.jpg" className="next"><FontAwesomeIcon icon={faArrowLeft} /></a>
                <img src={ImagenTres} alt="" />
                <a href="#manzur-gastona.jpg" className="next"><FontAwesomeIcon icon={faArrowRight} /></a>
                <a href="#" className="close">x</a>
            </article>
        </>
    );
};

export default Fotografía;