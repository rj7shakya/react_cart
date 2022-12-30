import React, { useEffect, useState } from "react";
import list from "../data/mock";

import ProductItem from "../components/productItem";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(list);
  }, []);

  return (
    <div>
      {productList?.map((i) => (
        <ProductItem />
      ))}
    </div>
  );
};

export default Home;
