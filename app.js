//const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//global config values
app.set("view engine", "pug");
app.set("views", "views-pug");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

// app.use("/", (req, res, next) => {
// 	//console.log("This always runs");
// 	next(); //Allows the request to continue to the next middleware
// });

// const server = http.createServer(app);

// server.listen(4000);

// app.use((req, res, next) => {
// 	console.log("The first middleware");
// 	next();
// });

// app.use((req, res, next) => {
// 	console.log("The is second middleware");
// 	next();
// });

// app.use("/users", (req, res, next) => {
// 	res.send({ users: ["User1", "User2", "User3"] });
// });

// app.use("/", (req, res, next) => {
// 	res.send("<h1>This is landing page</h1>");
// });

//404 page
app.use((req, res, next) => {
	//res.status(404).sendFile(path.join(__dirname, "./", "views", "404.html"));
	res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(4000);

//console.log("Hello from Node.js");
