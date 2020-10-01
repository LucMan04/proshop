import products from "../../../src/products";

export default (req, res) => {
  switch (req.method) {
    case "GET":
      const { productId } = req.query;
      const product = products.find((product) => product._id === productId);
      if (product) {
        res.statusCode = 200;
        res.json(product);
      } else {
        res.statusCode = 404;
        res.send(`Could not find product with id ${productId}.`);
      }
      break;
    case "POST":
      break;
    case "PUT":
      break;
    default:
      break;
  }
};
