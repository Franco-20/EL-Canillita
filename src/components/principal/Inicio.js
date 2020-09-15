import React from "react";
import ApiClimaMoneda from "./ApiClimaMoneda";
import Card from "react-bootstrap/Card";

const Inicio = () => {
  return (
    <div>
      <ApiClimaMoneda />
      <div className="container">
          <article className="text-center">
            <img src={process.env.PUBLIC_URL + "virus.gif"} alt=""/>
          </article>
          <h3 className="mt-4 mb-3 titulo text-center">Destacadas del dia</h3>
        <div className="d-flex justify-content-center">
          <div className="row">
            <div>
              <Card className="bg-dark text-white">
                <Card.Img
                  src={process.env.PUBLIC_URL + "covid.jpg"}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>Nuevos casos en Tucuman</Card.Title>
                  <Card.Text>
                    Hoy se murieron mas de 300 tucumanos por el nuevo virus que
                    nos esta matando a todos y volviendonos carcelos en nuestras
                    propias className
                  </Card.Text>
                  <Card.Text>
                    ATTE: Franco el chico que no aguanta a su hermana.
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div className="ml-3">
              <Card className="bg-dark text-white cardDestacado">
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
              <Card className="bg-dark text-white cardDestacado mt-2">
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
      </div>
      <h3 className="titulo">Categorias</h3>
        <article className="text-center">
        <img src={process.env.PUBLIC_URL + "coto.gif"} alt=""/>
        </article>
    </div>
  );
};

export default Inicio;
