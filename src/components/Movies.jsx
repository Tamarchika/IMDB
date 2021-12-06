import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovies } from "./movieAPI";
import { Row, Col } from "react-bootstrap";
import Cards from "./cards";

const Movies = () => {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const result = await fetchMovies(id);
      setMovie(result.data.movies[0]);
    };
    fetchMovie();
  }, [id]);

  return (
    <React.Fragment>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Cards />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Movies;
