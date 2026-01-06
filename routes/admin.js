const express = require("express");

const productsController = require("../controllers/products");

const Router = express.Router();

Router.get("/add-product", productsController.getAddProduct);

//middleware
Router.post("/add-product", productsController.postAddProduct);

exports.routes = Router;
