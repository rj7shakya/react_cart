import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductItem = ({ i }) => {
  return (
    <Card className="m-5">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <Card.Body>
          <Card.Title>{i?.name}</Card.Title>
          <Card.Title>{i?.company}</Card.Title>
        </Card.Body>

        <Button variant="primary">ADD TO CART</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
