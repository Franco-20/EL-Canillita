import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Qemao from '../assents/img/quema.jpg';

const Fotografía = () => {
    return (
        <>
        <Container>
            <Row>
                <Col lg={8} md={12}>
                <div className="Container">
                            <h1 className="my-4"><strong>Coronavirus en Tucumán: 9 muertes y 543 casos en total este sábado</strong></h1>
                            <h3 className="my-4">PANDEMIA | Hace instantes el Ministerio de Salud dio su reporte vespertino del virus: a las cifras de la mañana se sumaron 3 fallecimientos y 183 positivos. Todos los números.</h3>
                        </div>
                        <h1>Imagenes</h1>
                    <img alt="" src={Qemao} className="" />
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Fotografía;