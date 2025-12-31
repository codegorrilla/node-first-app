//const path = require("path");
const express = require("express");

//const rootDir = require("../util/path");

const Router = express.Router();

const adminData = require("./admin");

Router.get("/", (req, res, next) => {
	//console.log("In the middleware");
	//res.send("<h1>Hello from Express</h1>");
	//console.log("shop.js", adminData.products);
	//res.sendFile(path.join(rootDir, "views", "shop.html"));
	const products = adminData.products;
	res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = Router;
