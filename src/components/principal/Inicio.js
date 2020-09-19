import React from "react";
import ApiClimaMoneda from "./ApiClimaMoneda";
import Card from "react-bootstrap/Card";

const Inicio = (props) => {
  return (
    <div>
    <ApiClimaMoneda />
      <div className="container">
        <article className="text-center mt-4">
          <img src={process.env.PUBLIC_URL + "virus.gif"} alt="gif coronovirus" />
        </article>
        {/* SECCION DESTACADO */}
        <h3 className="mt-4 mb-3 titulo text-center">Destacadas del dia</h3>
        <div className="d-flex justify-content-center">
          <div className="row">
            <div>
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
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3">
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
              <Card className="bg-dark text-white cardDestacado mt-2 efecto">
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
        <article className="text-center mt-4">
          <img src={process.env.PUBLIC_URL + "coto.gif"} alt="" />
        </article>

        {/* SECCION ACTUALIDAD */}
        <h4 className="subtitulos">
          Actualidad <hr />
        </h4>
        <div className="d-flex justify-content-center">
          <div className="row">
            <div className=" mr-3 ml-4 efecto">
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
            <div className=" mr-3 efecto  ">
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
            <div className="mr-3 efecto  ">
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
            <div className="mr-3 ml-4 efecto ">
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
            <div className="mr-3 efecto">
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
            <div className="mr-3 efecto">
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
        <article className="text-center mt-4">
          <img src={process.env.PUBLIC_URL + "macro.gif"} alt="" />
        </article>

        {/* SECCION POLITICA */}
        <h4 className="subtitulos">
          Politica <hr />
        </h4>
        <div className="d-flex justify-content-center">
          <div className="row ">
            <div className="mr-3 ml-4 efecto">
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
            <div className="mr-3 efecto">
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
            <div className="mr-3 efecto">
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
        <article className="text-center mt-4">
          <img src={process.env.PUBLIC_URL + "emi.gif"} alt="" />
        </article>

        {/* SECCION SALUD */}
        <h4 className="subtitulos">
          Salud
          <hr />
        </h4>
        <div className="d-flex justify-content-center">
          <div className="row ">
            <div className="mr-3 ml-4 efecto">
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
            <div className="mr-3 efecto">
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
            <div className="mr-3 efecto">
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
        <article className="text-center mt-4 mb-4">
          <img src={process.env.PUBLIC_URL + "campo.gif"} alt="" />
        </article>
      </div>
    </div>
  );
};

export default Inicio;
