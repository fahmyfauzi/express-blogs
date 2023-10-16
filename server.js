const express = require("express");
const routePost = require("./routes/postRoute");
const errorHandler = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
require("dotenv").config();
const app = express();

//json body
app.use(express.json());

//middleware error
app.use(errorHandler);

//middleware route
app.use("/api/posts", routePost);

//connect DB
connectDB();

//server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
