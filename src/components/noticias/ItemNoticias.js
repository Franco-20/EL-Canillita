import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faStar } from '@fortawesome/free-solid-svg-icons';

const ItemNoticias = (props) => {
    return (
        <tr>
        <td>{props.noticia.id}</td>
        <td>{props.noticia.tituloNoticia}</td>
        <td>{props.noticia.resumen}</td>
        <td>{props.noticia.categoria}</td>
        <td>
          <span className="mx-2 "><a href=""><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></span>
          <span className="mx-1"><a href=""><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></a></span>
          <span className="mx-1 "><a href=""><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></a></span>
        </td>
      </tr>

    );
};

export default ItemNoticias;