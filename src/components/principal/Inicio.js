import React from "react";
import ApiClimaMoneda from "./ApiClimaMoneda";
import Card from "react-bootstrap/Card";

const Inicio = (props) => {
  return (
    <div>
      <ApiClimaMoneda />
      <div className="container">
        <article className="text-center mt-4 banner">
          <img
            src={process.env.PUBLIC_URL + "virus.gif"}
            alt="bannercoronovirus"
          />
        </article>
        {/* SECCION DESTACADO */}
        <h3 className=" titulo text-center">Destacadas del dia</h3>
        <div className="d-flex justify-content-center col-sm-12">
          <div className="row">
            <div className="body destacada">
              <Card className="bg-dark text-white efecto destacadaGrande">
                <Card.Img
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                  alt="Card image"/>
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div className="col-sm-12 col-lg-3 justify-content-center">
              <Card className="bg-dark text-white cardDestacado efecto">
                <Card.Img
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
              <Card className="bg-dark text-white cardDestacado efecto mt-1">
                <Card.Img
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </div>
        </div>

        {/* SECCION CATEGORIA */}

        {/* PUBLICIDAD */}
        <article className="text-center mt-4 banner">
          <img src={process.env.PUBLIC_URL + "coto.gif"} alt="banner de publicidad del supermercado coto" />
        </article>

        {/* SECCION ACTUALIDAD */}
        <h4 className="subtitulos">
          Actualidad <hr />
        </h4>
        <div className="d-flex justify-content-center">
          <div className="row">
            <div className=" mr-3 ml-4 efecto body">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                />
              </Card>
            </div>
            <div className=" mr-3 efecto medio">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                />
              </Card>
            </div>
            <div className="mr-3 efecto abajo">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                />
              </Card>
            </div>
          </div>
        </div>

        {/* PUBLICIDAD */}
        <article className="text-center my-4 banner">
          <img src={process.env.PUBLIC_URL + "covid.gif"} alt="banner de publicadad de Jaldo" />
        </article>

        {/* SECCION DEPORTES */}
        <h4 className="subtitulos">
          Deporte
          <hr />
        </h4>

        <div className="d-flex justify-content-center">
          <div className="row ">
            <div className="mr-3 ml-4 efecto body">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                />
              </Card>
            </div>
            <div className="mr-3 efecto medio">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                />
              </Card>
            </div>
            <div className="mr-3 efecto abajo">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                />
              </Card>
            </div>
          </div>
        </div>

        {/* PUBLICIDAD */}
        <article className="text-center mt-4 banner">
          <img src={process.env.PUBLIC_URL + "macro.gif"} alt="banner de publicidad del Banco Macro" />
        </article>

        {/* SECCION POLITICA */}
        <h4 className="subtitulos">
          Politica <hr />
        </h4>
        <div className="d-flex justify-content-center">
          <div className="row ">
            <div className="mr-3 ml-4 efecto body">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                />
              </Card>
            </div>
            <div className="mr-3 efecto medio">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                />
              </Card>
            </div>
            <div className="mr-3 efecto abajo">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                />
              </Card>
            </div>
          </div>
        </div>

        {/* PUBLICIDAD */}
        <article className="text-center mt-4 banner">
          <img src={process.env.PUBLIC_URL + "emi.gif"} alt="banner sobre la empresa EMI de ventas de materiales para la contruccion" />
        </article>

        {/* SECCION SALUD */}
        <h4 className="subtitulos">
          Salud
          <hr />
        </h4>
        <div className="d-flex justify-content-center">
          <div className="row ">
            <div className="mr-3 ml-4 efecto body">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                />
              </Card>
            </div>
            <div className="mr-3 efecto medio">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                />
              </Card>
            </div>
            <div className="mr-3 efecto abajo">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "covid1.jpg"}
                />
              </Card>
            </div>
          </div>
        </div>

        {/* PUBLICIDAD */}
        <article className="text-center mt-4 mb-4 banner">
          <img src={process.env.PUBLIC_URL + "campo.gif"} alt="banner de publicidad sobre CRUCIANELLI" />
        </article>
      </div>
    </div>
  );
};

export default Inicio;
