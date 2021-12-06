import React from "react";
import { Spinner, Button } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="data-loader">
      <Button variant="primary" disabled id="loader-1">
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{" "}
      <Button variant="primary" disabled id="loader-2">
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
};

export default Loader;
