const express = require("express");

const Router = express.Router();

const shopController = require("../controllers/products");

Router.get("/", shopController.getIndex);
Router.get("/products", shopController.getProducts);
Router.get("/cart", shopController.getCart);
Router.get("/checkout", shopController.getCheckout);

module.exports = Router;
