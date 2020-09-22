import React ,{useState, useEffect} from "react";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const Espectaculos = (props) => {
     const [espectaculos, setEspectaculos] = useState([]);
     
     useEffect(() => {
       traerArticulo()
     }, [])

     const traerArticulo = async () => {
          const respuesta = await fetch('http://localhost:4004/api/noticia/espectaculos');
          const resultado = await respuesta.json();
          console.log(resultado)
          setEspectaculos(resultado);
          props.setNoticiasCategorias(resultado);
     }

  return (
       <>
       <h1 className='titulo text-center'>Espectaculos</h1>
       <div className='d-flex flex-row flex-wrap justify-content-around '>
        {
         espectaculos.map(item => 
               <Card className=" container col-md-4 col-sm-12 shadow  my-3  shadow  efecto body"  key={item._id} >
                 <Card.Img
                   variant="top"
                   src= {item.imagen}
                   alt="imagen de la noticia"
                 /> 
                 <Card.Body className='efecto medio'>
                   <h2 className='text-center bg-secondary text-light '>{item.tituloNoticia}</h2>
                   <h3 className="card-text" > {item.resumen} </h3>
                   <p className="card-text" > {item.detalle} </p>
                  <Card.Img
                   variant="top"
                   src= {item.imagen2}
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
     </>
  );
 }

export default Espectaculos;





