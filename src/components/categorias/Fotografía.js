import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const Fotografia = () => {
    const [fotografia, setFotografia] = useState([]);
    useEffect(() => {
        traerArticulo()
    }, [])
    const traerArticulo = async () => {
        const respuesta = await fetch('http://localhost:4004/api/noticia/fotografia');
        const resultado = await respuesta.json();
        console.log(resultado)
        setFotografia(resultado);
    }
    return (
        <>
            <h1 className='titulo text-center'>Fotografía</h1>
            <h2 className='text-center'>Postales de Tucumán y el mundo</h2>
            <div className='container d-flex flex-row flex-wrap justify-content-around '>
                {
                    fotografia.map(item =>
                        <Card className="col-md-12 col-sm-12 shadow  my-3  shadow  efecto body" key={item._id} >
                        <h2 className='text-center bg-secondary text-light '>{item.tituloNoticia}</h2>
                            <Card.Img
                                className='efecto'
                                variant="top"
                                src={item.imagen}
                                alt="imagen de la noticia"
                            />
                            <Card.Body className=''>
                                <h3 className="card-text" > {item.resumen} </h3>
                                <p className="card-text" > {item.detalle} </p>
                                <div className=''>
                                    <p className="card-text">categoria: {item.categoria}</p>
                                    <p className="card-text">Autor: {item.autor}</p>
                                    <p className="card-text">Fecha: {item.fecha}</p>
                                    <p className="card-text"> {item.principal}</p>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </>
    );
}
export default Fotografia;
