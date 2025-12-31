const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const Router = express.Router();

const products = [];

Router.get("/add-product", (req, res, next) => {
	//console.log("In another middleware");
	// res.send(
	// 	'<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>',
	// );
	//res.sendFile(path.join(rootDir, "views", "add-product.html"));
	res.render("add-product", {
		pageTitle: "Add product",
		path: "/admin/add-product",
	});
});

//middleware
Router.post("/add-product", (req, res, next) => {
	//console.log(req.body);
	products.push({ title: req.body.title });
	res.redirect("/");
});

exports.routes = Router;
exports.products = products;
