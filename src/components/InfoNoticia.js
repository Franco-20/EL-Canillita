
import React from 'react';
import imagen from '../assents/img/noticiacovid.jpg';
import imagencovid from '../assents/img/publicidad2.gif';
import imagenpublicidad from '../assents/img/publicidad1.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShareSquare } from '@fortawesome/free-solid-svg-icons';


const InfoNoticia = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={8} md={12}>
                        <div className="Container">
                            <h1 className="my-4"><strong>Coronavirus en Tucumán: 9 muertes y 543 casos en total este sábado</strong></h1>
                            <h3 className="my-4">PANDEMIA | Hace instantes el Ministerio de Salud dio su reporte vespertino del virus: a las cifras de la mañana se sumaron 3 fallecimientos y 183 positivos. Todos los números.</h3>
                        </div>
                        <div className="">
                            <FontAwesomeIcon className="iconos" icon={faThumbsUp} />
                            <FontAwesomeIcon className="iconos" icon={faComment} />
                            <FontAwesomeIcon className="iconos" icon={faShareSquare} />
                        </div>
                        <img alt="" src={imagen} className="imagengrande" />
                        <p className="my-2"><small><b>12 de Septiembre del 2019 / Autor: Juan Perez</b></small></p>
                    </Col>
                    <Col className="d-none d-sm-none d-md-block" lg={4}>
                        <img alt="" src={imagencovid} className="publicidad"></img>
                        <img alt="" src={imagenpublicidad} className="publicidad2"></img>
                    </Col>
                </Row>
                <div className="mt-4">
                    <h5><em>Este sábado por la tarde, hace instantes, el Ministerio de Salud Pública informó que se suman 183 nuevos casos de COVID-19 en Tucumán, totalizando 6889 desde que comenzó la pandemia. Asimismo se sumaron 3 muertes más. En las últimas 24 horas, la Provincia totalizó 9 fallecimientos y 543 positivos.
                    Según el reporte, los nuevos casos corresponden a los siguientes departamentos: Capital (100); Chicligasta (18); Tafí Viejo (17); Cruz Alta (12); Yerba Buena (11); Lules (6); Famaillá (4); La Cocha (3); Monteros (3); Río Chico (2); Tafí del Valle (2); Burruyacú (2); Leales (2); Alberdi (1). Los mismos se encuentran en aislamiento de manera preventiva. "Los mismos se encuentran en aislamiento de manera preventiva", detallaron.
                Por último, señalaron que del total de pacientes internados a la fecha en el sector público: 128 se encuentran internados en salas; 48 en terapia intensiva y 35 con asistencia respiratoria mecánica; mientras que en el sector privado: 90 se encuentran internados en salas, 40 en terapia intensiva y 10 con asistencia respiratoria mecánica. El total de pacientes dados de alta a la fecha es de 1879.</em></h5>
                </div>
            </Container>
        </>
    );
};

export default InfoNoticia;