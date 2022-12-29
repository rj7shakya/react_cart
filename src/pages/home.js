import React, { useEffect, useState } from "react";
import list from "../data/mock";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(list);
  }, []);

  return (
    <div>
      {productList?.map((i) => (
        <Card className="m-5">
          <Card.Body className="d-flex justify-content-between align-items-center">
            <Card.Body>
              <Card.Title>{i?.name}</Card.Title>
              <Card.Title>{i?.company}</Card.Title>
            </Card.Body>

            <Button variant="primary">ADD TO CART</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
