import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Fotografía = () => {


    return (
        <>
            <Container>
                <article className="d-flex my-4">
                    <h6 className="p-1 title bg-primary">8M</h6>
                    <h6 className="p-1 title bg-danger">DIA INTERNACIONAL DE LA MUJER</h6>
                </article>
                <h1 className=" my-4 text-justify"><strong>“No somos histéricas, somos históricas”: Las postales que dejó la multitudinaria marcha del 8M</strong></h1>
                <Row>
                    <Col>
                   <img 
                   src="" 
                   alt=""
                   onChange="{imagenes}"
                   />

                    </Col>

                </Row>
            </Container>

        </>
    );
};

export default Fotografía;