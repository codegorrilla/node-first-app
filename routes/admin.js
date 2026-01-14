const express = require("express");

const adminController = require("../controllers/admin");

const Router = express.Router();

Router.get("/add-product", adminController.getAddProduct);
Router.get("/product-list", adminController.getProductList);

//middleware
Router.post("/add-product", adminController.postAddProduct);

exports.routes = Router;
