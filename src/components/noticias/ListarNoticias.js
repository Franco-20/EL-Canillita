import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import ItemNoticias from "./ItemNoticias";



const ListarNoticias = (props) => {
  return (
    <section className="container my-4">
        <div className="row">
            <h1 className="text-center col-12 my-4 display-4">Lista de Noticias</h1>   
        </div>
      <Table bordered striped className="mb-5" >
        <thead>
          <tr className="text-center lead">
            <th>ID</th>
            <th>Título</th>
            <th>Resumen</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {props.noticias.map((noticia) => <ItemNoticias key={noticia.id} noticia={noticia}></ItemNoticias>) }
        </tbody>
      </Table>
      <Button className="w-100 mb-5 mt-2" href="/noticias/agregar">Agregar noticia</Button>
    </section>
     
       
     
     
  );
};

export default ListarNoticias;
