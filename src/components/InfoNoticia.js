import React from "react";
import imagencovid from '../assents/img/publicidad2.gif';
import imagenpublicidad from '../assents/img/publicidad1.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const InfoNoticia = (props) => {
    return (
        <>
            <Container >
                <Row>
                    <Col lg={8} md={12}>
                        <div className="Container">
                            <h1 className="my-4 titleNoticia"><strong>{props.noticia.tituloNoticia}</strong></h1>
                            <hr />
                            <h3 className="my-4 text-justify">{props.noticia.resumen}</h3>
                        </div>
                        <img alt="" src={props.noticia.imagen} className="imagengrande" />
                        <p className="my-2"><small><b>{props.noticia.fecha} / Autor: {props.noticia.autor}</b></small></p>
                    </Col>
                    <Col className="d-none d-sm-none d-md-block" lg={4}>
                        <img alt="" src={imagencovid} className="publicidad2"></img>
                        <img alt="" src={imagenpublicidad} className="publicidad"></img>
                    </Col>
                    <div className="mt-4 text-justify">
                        <h5><em>{props.noticia.detalle}</em></h5>
                    </div>
                </Row>
            </Container>

        </>
    );
};

export default InfoNoticia;