import React, { useState, useRef } from "react";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from 'sweetalert2';
import {withRouter} from "react-router-dom";


const EditarNoticias = (props) => {
  const [categoria, setCategoria] = useState("");
  const [principal, setPrincipal] = useState(false);
  const [error, setError] = useState(false);

  const tituloNoticiaRef = useRef("");
  const resumenRef = useRef("");
  const detalleRef = useRef("");
  const imagenRef = useRef("");
  const imagen2Ref = useRef("");
  const autorRef = useRef("");
  const fechaRef = useRef("");

  const seleccionarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handlerSubmit =  async (e) => {
    e.preventDefault();
    const _categoria = categoria === "" ? props.noticia.categoria : categoria;
    const _principal =
      principal === false ? props.noticia.principal : principal;

    console.log(tituloNoticiaRef.current.value);
    console.log(fechaRef.current.value);

    if (
      tituloNoticiaRef.current.value.trim() === "" ||
      resumenRef.current.value.trim() === "" ||
      detalleRef.current.value.trim() === "" ||
      imagenRef.current.value.trim() === "" ||
      autorRef.current.value.trim() === "" ||
      fechaRef.current.value.trim() === "" ||
      _categoria === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    const noticiaModificada = {
      tituloNoticia: tituloNoticiaRef.current.value,
      resumen: resumenRef.current.value,
      detalle: detalleRef.current.value,
      imagen: imagenRef.current.value,
      imagen2: imagen2Ref.current.value,
      categoria: _categoria,
      autor: autorRef.current.value,
      fecha: fechaRef.current.value,
      principal: _principal
    }

    try {
      const consulta = await fetch(
        `http://localhost:4004/noticia/${props.noticia._id}`,

      {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json"
        },
          body: JSON.stringify(noticiaModificada)      
        },  
      );
      console.log(consulta)
      if(consulta.status === 200){
        props.setRecargarNoticia(true);
        Swal.fire(
          'Listo!',
          'Noticia modificada!',
          'success'
        )
        props.history.push("/admin")
      }
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <section className="container">
      <Form onSubmit={handlerSubmit}>
        <h1 className="text-center my-5">Editar Noticia</h1>
        {error === true ? (
          <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
        ) : null}
        <FormGroup controlId="noticiaId">
          <Form.Label>Titulo Noticia *</Form.Label>
          <FormControl
            type="text"
            placeholder=" Aumenta el Dolar oficial"
            ref={tituloNoticiaRef}
            defaultValue={props.noticia.tituloNoticia}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="resumenNoticia">
          <Form.Label>Resumen de la Noticia *</Form.Label>
          <FormControl
            type="text"
            placeholder=" Leve aumento en la moneda verde"
            ref={resumenRef}
            defaultValue={props.noticia.resumen}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="detalleNoticia">
          <Form.Label> Detalle de la Noticia *</Form.Label>
          <FormControl
            type="text"
            placeholder="mfksfmvlxkfgldkglsfspflsgnsgmlfg"
            ref={detalleRef}
            defaultValue={props.noticia.detalle}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="imagenNoticia">
          <Form.Label> Imagen principal *</Form.Label>
          <FormControl
            type="url"
            placeholder="https://images.app.goo.gl/hQgPVvUBRqcUG3m26"
            ref={imagenRef}
            defaultValue={props.noticia.imagen}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="imagenNoticia2">
          <Form.Label> Imagen secundaria</Form.Label>
          <FormControl
            type="url"
            placeholder="https://images.app.goo.gl/hQgPVvUBRqcUG3m26"
            ref={imagen2Ref}
            defaultValue={props.noticia.imagen2}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="autorNoticia">
          <Form.Label> Autor</Form.Label>
          <FormControl
            type="text"
            placeholder="Franco O."
            ref={autorRef}
            defaultValue={props.noticia.autor}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="fechaNoticia">
          <Form.Label>Fecha</Form.Label>
          <FormControl
            type="text"
            placeholder="20/09/20"
            ref={fechaRef}
            preventValue={props.noticia.fecha}
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
            defaultChecked={props.noticia.categoria === "actualidad"}
          />
          <Form.Check
            type="radio"
            label="Deportes"
            value="deportes"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "deportes"}
          />
          <Form.Check
            type="radio"
            label="Espectaculos"
            value="espectaculos"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "espectaculos"}
          />
          <Form.Check
            type="radio"
            label="Tecnologia"
            value="tecnologia"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "tecnologia"}
          />
          <Form.Check
            type="radio"
            label="Politica"
            value="politica"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "politica"}
          />
          <Form.Check
            type="radio"
            label="Economia"
            value="economia"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "economia"}
          />
          <Form.Check
            type="radio"
            label="Salud"
            value="salud"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "salud"}
          />
          <Form.Check
            type="radio"
            label="Fotografia"
            value="fotografia"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "fotografia"}
          />
        </div>
        <div className="text-center lead">
          <Form.Group controlId="principalId">
            <Form.Check
              type="checkbox"
              label="Publicar en principal"
              value="false"
              name="principal"
              defaultChecked={props.noticia.principal === "false"}
            />
          </Form.Group>
        </div>
        <Button variant="primary" type="submit" className="w-100">
          Editar
        </Button>
      </Form>
    </section>
  );
};

export default withRouter(EditarNoticias) ;
