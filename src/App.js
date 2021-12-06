import React from "react";
import Page404 from "./components/404";
import Home from "./components/Home";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./style/App.scss";
import Movies from "./components/Movies";
function App() {
  return (
    <Router>
      <Container fluid={true}>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand as={Link} to="/">
            IMDB
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movies/:id" element={<Movies />} />
          <Route exact path="*" element={<Page404 />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
