import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductScreen from "../../src/screens/ProductScreen";
import Loading from "../../src/components/Loading";

const productDetail = () => {
  const router = useRouter();

  const [product, setProduct] = new useState();
  const [loading, setLoading] = new useState(true);

  /**
   * make sure router, router.query and productId are available before sending request
   * https://github.com/vercel/next.js/issues/8051#issuecomment-580368756
   */
  useEffect(() => {
    if (router && router.query) {
      const { productId } = router.query;
      if (productId) {
        const fetchProduct = async () => {
          const { data } = await Axios.get(`/api/products/${productId}`);
          setProduct(data);
          setLoading(false);
        };
        fetchProduct();
      }
    }
  }, [router]);

  return <>{!loading ? <ProductScreen product={product} /> : <Loading />}</>;
};

export default productDetail;
