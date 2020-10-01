import React from "react";
import { useRouter } from "next/router";
import ProductScreen from "../../src/screens/ProductScreen";
import products from "../../src/products";

const productDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  const product = products.find((product) => product._id === productId);

  return (
    <>
      <ProductScreen product={product} />
    </>
  );
};

export default productDetail;
