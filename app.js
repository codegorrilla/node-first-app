//const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
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

app.listen(4000);

//console.log("Hello from Node.js");
