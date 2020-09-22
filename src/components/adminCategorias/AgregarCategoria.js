import React from 'react';
import { Form, FormGroup, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';



const AgregarCategoria = (props) => {

        const [error, setError] = useState(false);
        const [nombreCategoria, setNombreCategoria] = useState("");
      

        const handlerSubmit = async (e) =>{
            e.preventDefault();
            if(
                nombreCategoria === ""
              ){
                  setError(true);
                  return;
              }
              setError(false);
              const nuevaCategoria = {
                nombreCategoria
              }
              try {
                const post = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(nuevaCategoria)
            
    
                } 
                const resultado = await fetch("http://localhost:4000/categorias", post) 
                console.log(resultado)
                if(resultado.status === 201){
                    props.setRecargarCategoria(true)
                        Swal.fire(
                            'Listo!',
                            'Categoria nueva creada!',
                            'success'
                          )
                          props.history.push('/admin/categoria')
                    }
    
             } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ocurrió un error!',
                  })
                 console.log(error);
             }
        };
            

    return (
        <section className="container mb-5">
      <Form onSubmit={handlerSubmit}>
        <h1 className="text-center my-5">Agregar Nueva Categoria</h1>
        {error === true ? (
          <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
        ) : null}
        <FormGroup controlId="categoriaId">
          <Form.Label> Nombre Categoria *</Form.Label>
          <FormControl
            type="text"
            placeholder=" Deportes"
            onChange={(e) => setNombreCategoria(e.target.value)}
          ></FormControl>
        </FormGroup>

        <Button variant="primary" type="submit" className="w-100">
          Agregar
        </Button>
      </Form>
    </section>

    );
};

export default withRouter(AgregarCategoria);