import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductScreen from "../../src/screens/ProductScreen";

const productDetail = () => {
  const router = useRouter();
  const { productId } = router.query;

  const [product, setProduct] = new useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await Axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return <>{product ? <ProductScreen product={product} /> : <></>}</>;
};

export default productDetail;
