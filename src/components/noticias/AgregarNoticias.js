import React, {useState, useEffect} from "react";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';

const AgregarNoticias = (props) => {
    const [error, setError] = useState(false);
    const [tituloNoticia, setTituloNoticia] = useState("");
    const [resumen, setResumen] = useState("");
    const [detalle, setDetalle] = useState("");
    const [imagen, setImagen] = useState("");
    const [imagen2, setImagen2] = useState("");
    const [categoria, setCategoria] = useState("");
    const [autor, setAutor] = useState("");
    const [fecha, setFecha] = useState("");
    const [principal, setPrincipal] = useState("false");

    const seleccionarCategoria = (e) =>{
        setCategoria(e.target.value);
    }
     const handlerSubmit = async (e) =>{
      e.preventDefault();
      if(tituloNoticia.trim() === "" ||
         resumen.trim() === "" || 
         detalle.trim() === "" ||
         imagen.trim() === "" ||
         autor.trim() === "" ||
         fecha === "" ||
         categoria === ""
        ){
            setError(true);
            return;
        }
        setError(false);

        const noticia= {
            tituloNoticia: tituloNoticia,
            resumen: resumen,
            detalle: detalle,
            imagen: imagen,
            imagen2:imagen2,
            categoria: categoria, 
            autor: autor, 
            fecha: fecha,
            principal: principal
        };

         try {
            const post = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(noticia)
        

            } 
            const resultado = await fetch("http://localhost:4004/api/noticias", post) 
            console.log(resultado)
            if(resultado.status === 201){
                props.setRecargarNoticia(true)
                    Swal.fire(
                        'Listo!',
                        'Noticia nueva creada!',
                        'success'
                      )
                      props.history.push('/admin')
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
    <section className="container">
      <Form onSubmit={handlerSubmit}>
        <h1 className="text-center my-5">Agregar Nueva Noticia</h1>
        {error === true ? (
          <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
        ) : null}
        <FormGroup controlId="noticiaId">
          <Form.Label>Titulo Noticia *</Form.Label>
          <FormControl
            type="text"
            placeholder=" Aumenta el Dolar oficial"
            onChange={(e) => setTituloNoticia(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="resumenNoticia">
          <Form.Label>Resumen de la Noticia *</Form.Label>
          <FormControl
            type="text"
            placeholder=" Leve aumento en la moneda verde"
            onChange={(e) => setResumen(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="detalleNoticia">
          <Form.Label> Detalle de la Noticia *</Form.Label>
          <FormControl
            type="text"
            placeholder="mfksfmvlxkfgldkglsfspflsgnsgmlfg"
            onChange={(e) => setDetalle(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="imagenNoticia">
          <Form.Label> Imagen principal *</Form.Label>
          <FormControl
            type="url"
            placeholder="https://images.app.goo.gl/hQgPVvUBRqcUG3m26"
            onChange={(e) => setImagen(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="imagenNoticia2">
          <Form.Label> Imagen secundaria</Form.Label>
          <FormControl
            type="url"
            placeholder="https://images.app.goo.gl/hQgPVvUBRqcUG3m26"
            onChange={(e) => setImagen2(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="autorNoticia">
          <Form.Label> Autor</Form.Label>
          <FormControl 
          type="text" 
          placeholder="Franco O."
          onChange={(e) => setAutor(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="fechaNoticia">
          <Form.Label>Fecha</Form.Label>
          <FormControl 
          type="date" 
          placeholder="20/09/20"
          onChange={(e) => setFecha(e.target.value)}
          ></FormControl>
        </FormGroup>

        <h3 className="text-center">Categoria *</h3>
        <div className="text-center my-4">
          <Form.Check
            type="radio"
            label="Actualidad"
            value="actualidad"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
          />
          <Form.Check
            type="radio"
            label="Deportes"
            value="deportes"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
          />
          <Form.Check
            type="radio"
            label="Espectaculos"
            value="espectaculos"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
          />
          <Form.Check
            type="radio"
            label="Tecnologia"
            value="tecnologia"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
          />
          <Form.Check
            type="radio"
            label="Politica"
            value="politica"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
          />
          <Form.Check
            type="radio"
            label="Economia"
            value="economia"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
          />
          <Form.Check
            type="radio"
            label="Salud"
            value="salud"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
          />
          <Form.Check
            type="radio"
            label="Fotografia"
            value="fotografia"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
          />
        </div>
        <div className="text-center lead">
        <Form.Group controlId="principalId">
          <Form.Check 
          type="checkbox" 
          label="Publicar en principal" 
          value="principal"
          name="principal"
          onChange= {(e) => setPrincipal(e.target.value)}
          />
        </Form.Group>
        </div>
        <Button variant="primary" type="submit" className="w-100">
          Agregar
        </Button>
      </Form>
    </section>
  );
};

export default withRouter(AgregarNoticias);
