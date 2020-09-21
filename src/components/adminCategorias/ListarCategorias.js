import React from 'react';
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import ItemCategoria from './ItemCategoria';

const ListarCategorias = (props) => {
    return (
        <section className="container my-4">
        <div className="row">
            <h1 className="text-center col-12 my-4 display-4">Lista de Categorias</h1>   
        </div>
      <Table bordered striped className="mb-5" >
        <thead>
          <tr className="text-center lead">
            <th>ID</th>
            <th>Nombre categoria</th>
            <th>Acciones</th>
            
          </tr>
        </thead>
        <tbody>

       {props.categorias.map((categoria) => 
       <ItemCategoria categoria={categoria} 
       setRecargarCategoria={props.setRecargarCategoria} key={categoria.id}></ItemCategoria>)} 
        </tbody>
      </Table>
      <Button className="w-100 mb-5 mt-2" href="/admin/agregarcategoria">Agregar categoria</Button>
    </section>
    );
};

export default ListarCategorias;