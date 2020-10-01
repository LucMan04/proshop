import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import Spinner from "react-bootstrap/Spinner";

const HomeScreen = () => {
  const [products, setProducts] = new useState();
  const [loading, setLoading] = new useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await Axios.get("/api/products");
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {!loading ? (
          products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            );
          })
        ) : (
          <Spinner />
        )}
      </Row>
    </>
  );
};

export default HomeScreen;
