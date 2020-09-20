import React from 'react';
import Noti from './Noti';

const MostrarNoticias = (props) => {
    return (
        <div>
      <div className="container">
        <article className="text-center mt-4">
          <img
            src={process.env.PUBLIC_URL + "virus.gif"}
            alt="gif coronovirus"
          />
        </article>
        <h3 className="mt-4 mb-3 titulo text-center">Destacadas del dia</h3>
        <div className="d-flex justify-content-center">
          <div className="row">
            <div>
              {props.noticias.map((noticias) => (
               <Noti key={noticias._id}
               noticia={noticias}></Noti>
              ))}
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3">
             

              
            </div>
          </div>
        </div>
        {/* SECCION CATEGORIA */}

        {/* PUBLICIDAD */}
        <article className="text-center mt-4">
          <img src={process.env.PUBLIC_URL + "coto.gif"} alt="" />
        </article>

        {/* SECCION ACTUALIDAD */}
        <h4 className="subtitulos">
          Actualidad <hr />
        </h4>
        <div className="d-flex justify-content-center">
          <div className="row">
            <div className=" mr-3 ml-4 efecto"></div>
            <div className=" mr-3 efecto"></div>
            <div className="mr-3 efecto  "></div>
          </div>
        </div>

        {/* PUBLICIDAD */}
        <article className="text-center my-4">
          <img src={process.env.PUBLIC_URL + "covid.gif"} alt="" />
        </article>
        {/* SECCION DEPORTES */}
        <h4 className="subtitulos">
          Deporte
          <hr />
        </h4>

        <div className="d-flex justify-content-center">
          <div className="row ">
            <div className="mr-3 ml-4 efecto "></div>
            <div className="mr-3 efecto"></div>
            <div className="mr-3 efecto"></div>
          </div>
        </div>

        {/* PUBLICIDAD */}
        <article className="text-center mt-4">
          <img src={process.env.PUBLIC_URL + "macro.gif"} alt="" />
        </article>
      </div>
    </div>
    );
};

export default MostrarNoticias;