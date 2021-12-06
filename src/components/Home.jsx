import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataAsync, selectData, status, clearState } from "./homeSlice";
import {
  Form,
  Col,
  Button,
  Row,
  Container,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Cards from "./cards";
import { useMemo } from "react";
import debounce from "lodash.debounce";

function Home() {
  const sources = [
    "Lord Of The Rings",
    "Inception",
    "The Hobbit",
    "Titanic",
    "The Witcher",
    "The Conjuring",
    "I am Legend",
    "Home Alone2",
    "The Dark Knight",
    "The Shawshank Redemption",
    "Pulp Fiction",
    "Forrest Gump",
    "City of God",
    "Seven",
    "The Green Mile",
    "Leon",
    "Gladiator",
  ];
  const movies = useSelector(selectData);
  const loadingStatus = useSelector(status);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("Home alone2");
  const handleClick = (event) => {
    setSearchText(event.target.name);
    dispatch(clearState());
  };
  const changeHandler = (event) => {
    setSearchText(event.target.value);
  };
  useEffect(() => {
    dispatch(fetchDataAsync(searchText));
  }, [searchText, dispatch]);
  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 500),
    []
  );

  return (
    <div className="home-page">
      <Container>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden></Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Type text to search"
                name="searchText"
                onChange={debouncedChangeHandler}
                autoComplete="off"
              />
            </Col>
            <Col xs="auto">
              <Button
                type="submit"
                className="mb-2"
                onClick={() => dispatch(clearState())}
              >
                Search
              </Button>
            </Col>
            <Col xs="auto">
              <div className="sourceContainer">
                <DropdownButton id="dropdown-basic-button" title="Top Movies">
                  {sources.map((value, index) => (
                    <Dropdown.Item
                      key={index}
                      name={value}
                      onClick={handleClick}
                    >
                      {value}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
            </Col>
          </Row>
        </Form>

        <Row className="justify-content-md-center">
          <Col md="auto">
            {loadingStatus === "loading" ? (
              <Loader />
            ) : movies.length > 0 ? (
              movies.map((value, index) => <Cards key={index} data={value} />)
            ) : (
              <p className="noArticle">
                There are no movies matching your request
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
