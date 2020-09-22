import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faStar } from '@fortawesome/free-solid-svg-icons';
import {Link, withRouter} from 'react-router-dom';
import Swal from "sweetalert2";


const ItemCategoria = (props) => {

    const eliminarCategoria = (id) => {
        console.log(id);
    
        Swal.fire({
          title: "Estas seguro de eliminar la categoria?",
          text: "No se puede recuperar la categoria eliminada!",
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
                  const respuesta = await fetch(`http://localhost:4000/categorias/${id}`,
                  {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                  }     
                   ); 
                   console.log(respuesta);
          if (respuesta.status === 200) {
            props.setRecargarCategoria(true);
            Swal.fire(
              "Eliminado!",
              "La categoria fue eliminado correctamente.",
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
        <tr className="text-center">
        <td>{props.categoria.id}</td>
        <td>{props.categoria.nombreCategoria}</td>
        
        <td className="text-center">
          <span className="mx-2 "><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
          <span className="mx-1"><Link to={`/admin/editarcategoria`} className="btn btn-success mr-2"><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link></span>
          <span className="mx-1 "><button className="btn btn-danger mr-2" onClick={() => eliminarCategoria(props.categoria._id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></span>
        </td>
      </tr>
    );
};

export default withRouter(ItemCategoria);