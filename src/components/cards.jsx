import React from "react";
import { Card, Row, Col, Accordion } from "react-bootstrap";
import PropTypes from "prop-types";
import Placeholder from "../style/unnamed.png";

const Cards = ({ data }) => {
  let cast = data.cast;

  return (
    <div className="news-cards">
      <Row>
        <Col></Col>
        <Col sm={8}>
          <Card>
            <Card.Header className="movie-title">
              Movie Title: {data.title}
            </Card.Header>
            <Card.Img
              variant="top"
              src={typeof data.poster === "string" ? data.poster : Placeholder}
              alt={data.title}
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold", fontSize: "1rem" }}>
                {data.plot}
              </Card.Title>
              <Card.Link href={data.trailer.link}>Trailer</Card.Link>
              <Card.Text className="movie-info">
                <b>Year:</b> {data.year}. <br /> <b>Movie length:</b>
                {data.length}. <br />
                <b>Movie rating:</b> {data.rating}
              </Card.Text>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <b>Read more</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h1>Cast</h1>
                    {cast.map((el, i) => (
                      <li key={i}>
                        <b>Actor: </b> {el.actor}, <b>Character: </b>{" "}
                        {el.character}
                      </li>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

Cards.propTypes = {
  data: PropTypes.object,
};

export default Cards;
