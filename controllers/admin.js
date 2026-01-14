const Product = require("../models/product");

module.exports.getAddProduct = (req, res, next) => {
	res.render("admin/add-product", {
		pageTitle: "Add product",
		path: "/admin/add-product",
	});
};

module.exports.postAddProduct = (req, res, next) => {
	const product = new Product(req.body.title);
	product.save();
	res.redirect("/");
};

module.exports.getProductList = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render("admin/product-list", {
			prods: products,
			pageTitle: "Admin Products",
			path: "/admin/product-list",
		});
	});
};
