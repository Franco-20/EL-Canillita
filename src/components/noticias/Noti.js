import React from 'react';
import Card from "react-bootstrap/Card";

const Noti = (props) => {
    return (
        <Card className="bg-dark text-white cardDestacado efecto">
                <Card.Img
                  src={props.noticia.imagen}
                />
                <Card.ImgOverlay>
    <Card.Title>{props.noticia.tituloNoticia}</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
    );
};

export default Noti;