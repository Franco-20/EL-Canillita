import React, { useState, useEffect } from "react";
import ApiClimaMoneda from "./ApiClimaMoneda";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import Deportes from "../categorias/Deportes";
import Salud from "../categorias/Salud";

const Inicio = (props) => {
  const [todasNoticias, setTodasNoticias] = useState([]);

  useEffect(() => {
    traerArticulo()
  }, [])

  const traerArticulo = async () => {
    const respuesta = await fetch('');
    const resultado = await respuesta.json();
    console.log(resultado)
    setTodasNoticias(resultado);
    props.setNoticiasCategorias(resultado);
  }

  // Para mostrar categoria actualidad
  const actualidad = todasNoticias.reverse().filter((noticia) => {
    return noticia.categoria === 'actualidad';
  });
  const mostrarActualidad = actualidad.slice(0, 3)
  console.log('respuesta de actualidad', mostrarActualidad);


  //  Para mostrar categoria Deportes
  const deportes = todasNoticias.reverse().filter((noticia) => {
    return noticia.categoria === 'deportes'
  });
  const mostrarDeportes = deportes.slice(0, 3)
  console.log('respuesta de deportes', mostrarDeportes);

  //  Para mostrar categoria politica
  const politica = todasNoticias.reverse().filter((noticia) => {
    return noticia.categoria === 'politica'
  });
  const mostrarPolitica = politica.slice(0, 3);

  // Para mostrar categoria Salud
  const salud = todasNoticias.reverse().filter((noticia) => {
    return noticia.categoria === 'salud'
  })
  const mostrarSalud = salud.slice(0, 3);

  return (
    <div>
      <ApiClimaMoneda />
      <div className="container">
        <article className="text-center mt-4 banner">
          <img
            src={process.env.PUBLIC_URL + "virus.gif"}
            alt="bannercoronovirus"
          />
        </article>
        {/* SECCION DESTACADO */}
        <h3 className=" titulo text-center">Destacadas del dia</h3>
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 body">
              <Card className="bg-dark text-white efecto">
                <Card.Img
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                  alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div className="col-sm-12 col-lg-4 cardDestacado">
              <Card className="bg-dark text-white efecto">
                <Card.Img
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
              <Card className="bg-dark text-white efecto">
                <Card.Img
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </div>
        </div>

        {/* SECCION CATEGORIA */}

        {/* PUBLICIDAD */}
        <article className="text-center mt-4 banner">
          <img src={process.env.PUBLIC_URL + "coto.gif"} alt="banner de publicidad del supermercado coto" />
        </article>

        {/* SECCION ACTUALIDAD */}
        <h1 className=' subtitulos'>Actualidad</h1>
        <br />
        <div className='d-flex flex-row flex-wrap justify-content-around '>
          {
            mostrarActualidad.map(item =>
              <Card className=" container col-md-4 col-sm-12 shadow  my-3  shadow  efecto body" key={item._id} >
                <Card.Img
                  variant="top"
                  src={item.imagen}
                  alt="imagen de la noticia"
                />
                <Card.Body className='efecto medio'>
                  <h2 className='text-center bg-secondary text-light '>{item.tituloNoticia}</h2>
                  <h3 className="card-text" > {item.resumen} </h3>
                  <p className="card-text" > {item.detalle} </p>
                  <Card.Img
                    variant="top"
                    src={item.imagen2}
                    alt="imagen secundaria de la noticia "
                  />
                  <div className='efecto bajo'>
                    <p className="card-text">Categoria: {item.categoria}</p>
                    <p className="card-text">Autor: {item.autor}</p>
                    <p className="card-text">Fecha: {item.fecha}</p>
                    <p className="card-text"> {item.principal}</p>
                  </div>
                </Card.Body>
                <Link to={`/noticia/${item._id}`} className='btn btn-primary my-2 p-2'>
                       ver Más.!!
                   </Link>
              </Card>
            )
          }
        </div>




        {/* PUBLICIDAD */}
        <article className="text-center my-4 banner">
          <img src={process.env.PUBLIC_URL + "covid.gif"} alt="banner de publicadad de Jaldo" />
        </article>

        {/* SECCION DEPORTES */}
        <h1 className=' subtitulos'>Deportes</h1>
        <br />
        <div className='d-flex flex-row flex-wrap justify-content-around '>
          {
            mostrarDeportes.map(item =>
              <Card className=" container col-md-4 col-sm-12 shadow  my-3  shadow  efecto body" key={item._id} >
                <Card.Img
                  variant="top"
                  src={item.imagen}
                  alt="imagen de la noticia"
                />
                <Card.Body className='efecto medio'>
                  <h2 className='text-center bg-secondary text-light '>{item.tituloNoticia}</h2>
                  <h3 className="card-text" > {item.resumen} </h3>
                  <p className="card-text" > {item.detalle} </p>
                  <Card.Img
                    variant="top"
                    src={item.imagen2}
                    alt="imagen secundaria de la noticia "
                  />
                  <div className='efecto bajo'>
                    <p className="card-text">categoria: {item.categoria}</p>
                    <p className="card-text">Autor: {item.autor}</p>
                    <p className="card-text">Fecha: {item.fecha}</p>
                    <p className="card-text"> {item.principal}</p>
                  </div>
                </Card.Body>
                <Link to={`/noticia/${item._id}`} className='btn btn-primary my-2 p-2'>
                       ver Más.!!
                   </Link>
              </Card>
            )
          }
        </div>





        {/* PUBLICIDAD */}
        <article className="text-center mt-4 banner">
          <img src={process.env.PUBLIC_URL + "macro.gif"} alt="banner de publicidad del Banco Macro" />
        </article>

        {/* SECCION POLITICA */}
        <h1 className=' subtitulos'>Politica</h1>
        <br />
        <div className='d-flex flex-row flex-wrap justify-content-around '>
          {
            mostrarPolitica.map(item =>
              <Card className=" container col-md-4 col-sm-12 shadow  my-3  shadow  efecto body" key={item._id} >
                <Card.Img
                  variant="top"
                  src={item.imagen}
                  alt="imagen de la noticia"
                />
                <Card.Body className='efecto medio'>
                  <h2 className='text-center bg-secondary text-light '>{item.tituloNoticia}</h2>
                  <h3 className="card-text" > {item.resumen} </h3>
                  <p className="card-text" > {item.detalle} </p>
                  <Card.Img
                    variant="top"
                    src={item.imagen2}
                    alt="imagen secundaria de la noticia "
                  />
                  <div className='efecto bajo'>
                    <p className="card-text">categoria: {item.categoria}</p>
                    <p className="card-text">Autor: {item.autor}</p>
                    <p className="card-text">Fecha: {item.fecha}</p>
                    <p className="card-text"> {item.principal}</p>
                  </div>
                </Card.Body>
                <Link to={`/noticia/${item._id}`} className='btn btn-primary my-2 p-2'>
                       ver Más.!!
                   </Link>
              </Card>
            )
          }
        </div>



        {/* PUBLICIDAD */}
        <article className="text-center mt-4 banner">
          <img src={process.env.PUBLIC_URL + "emi.gif"} alt="banner sobre la empresa EMI de ventas de materiales para la contruccion" />
        </article>

        {/* SECCION SALUD */}
        <h1 className=' subtitulos'>Salud</h1>
        <br />
        <div className='d-flex flex-row flex-wrap justify-content-around '>
          {
            mostrarSalud.map(item =>
              <Card className=" container col-md-4 col-sm-12 shadow  my-3  shadow  efecto body" key={item._id} >
                <Card.Img
                  variant="top"
                  src={item.imagen}
                  alt="imagen de la noticia"
                />
                <Card.Body className='efecto medio'>
                  <h2 className='text-center bg-secondary text-light '>{item.tituloNoticia}</h2>
                  <h3 className="card-text" > {item.resumen} </h3>
                  <p className="card-text" > {item.detalle} </p>
                  <Card.Img
                    variant="top"
                    src={item.imagen2}
                    alt="imagen secundaria de la noticia "
                  />
                  <div className='efecto bajo'>
                    <p className="card-text">categoria: {item.categoria}</p>
                    <p className="card-text">Autor: {item.autor}</p>
                    <p className="card-text">Fecha: {item.fecha}</p>
                    <p className="card-text"> {item.principal}</p>
                  </div>
                </Card.Body>
                <Link to={`/noticia/${item._id}`} className='btn btn-primary my-2 p-2'>
                       ver Más.!!
                   </Link>
              </Card>
            )
          }
        </div>


        {/* PUBLICIDAD */}
        <article className="text-center mt-4 mb-4 banner">
          <img src={process.env.PUBLIC_URL + "campo.gif"} alt="banner de publicidad sobre CRUCIANELLI" />
        </article>
      </div>
    </div>
  );
};

export default Inicio;
