import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faStar } from '@fortawesome/free-solid-svg-icons';
import {Link, withRouter} from 'react-router-dom';


const ItemNoticias = (props) => {
    const eliminarNoticia = (id) => {
        console.log(id);
    
        Swal.fire({
          title: "Estas seguro de eliminar la noticia?",
          text: "No se puede recuperar la noticia eliminada!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, eliminar!",
          cancelButtonText: "Cancelar",
        }).then(async (result) => {
          console.log(result);
          if (result.value) {
              try {
                  const respuesta = await fetch(`http://localhost:4004/api/noticia/${id}`,
                  {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                  }     
                   ); 
                   console.log(respuesta);
          if (respuesta.status === 200) {
            props.setRecargarNoticia(true);
            Swal.fire(
              "Eliminado!",
              "la Noticia fue eliminado correctamente.",
              "success"
            );
            props.history.push('/admin/categoria');
         
          }
              } catch (error) {
                  console.log(error);
              }
            }
        });
      };

    return (
        <tr>
        <td>{props.noticia._id}</td>
        <td>{props.noticia.tituloNoticia}</td>
        <td>{props.noticia.resumen}</td>
        <td>{props.noticia.categoria}</td>
        <td>
          <span className="mx-2 "><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
          <span className="mx-1"><Link to={`/noticias/editar/${props.noticia._id}`} className="btn btn-success mr-2"><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link></span>
          <span className="mx-1 "><button className="btn btn-danger mr-2" onClick={() => eliminarNoticia(props.noticia._id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></span>
        </td>
      </tr>

    );
        
};

export default withRouter(ItemNoticias);