import connectDB from "../../../db/config/db";
import products from "../../../src/products";
connectDB();

export default (req, res) => {
  switch (req.method) {
    case "GET":
      res.statusCode = 200;
      res.json(products);
      break;
    case "POST":
      break;
    case "PUT":
      break;
    default:
      break;
  }
};
