import React, { useState, useEffect } from "react";
import imagencovid from '../assents/img/publicidad2.gif';
import imagenpublicidad from '../assents/img/publicidad1.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShareSquare } from '@fortawesome/free-solid-svg-icons';


const InfoNoticia = () => {
    const [detalleNoticia, setDetalleNoticia] = useState([]);

    useEffect(() => {
        traerArticulo()
    }, [])

    const traerArticulo = async () => {
        const respuesta = await fetch('http://localhost:4005/api/noticia');
        const resultado = await respuesta.json();
        console.log(resultado)
        setDetalleNoticia(resultado);
    }

    return (
        <>
            {
                detalleNoticia.map(item =>
                    <Container >
                        <Row>
                            <Col lg={8} md={12}>
                                <div className="Container" key={item._id}>
                                    <h1 className="my-4"><strong>{item.tituloNoticia}</strong></h1>
                                    <h3 className="my-4 text-justify">{item.resumen}</h3>
                                </div>
                                <div className="">
                                    <FontAwesomeIcon className="iconos" icon={faThumbsUp} />
                                    <FontAwesomeIcon className="iconos" icon={faComment} />
                                    <FontAwesomeIcon className="iconos" icon={faShareSquare} />
                                </div>
                                <img alt="" src={item.imagen} className="imagengrande" />
                                <p className="my-2"><small><b>{item.fecha} / {item.autor}</b></small></p>
                                <Col className="d-none d-sm-none d-md-block" lg={4}>
                                    <img alt="" src={imagenpublicidad} className="publicidad"></img>
                                </Col>
                                <img alt="" src={imagencovid} className="publicidad2"></img>
                            </Col>
                        </Row>
                        <div className="mt-4 text-justify">
                            <h5><em>{item.detalle}</em></h5>
                        </div>
                    </Container>
                )
            }
        </>
    );
};

export default InfoNoticia;