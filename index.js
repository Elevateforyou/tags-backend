const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const errorHandler = require("./src/middleware/errorHandler");
const PORT = process.env.PORT || 5000;
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const connectDB = require("./src/config/connectDb");
const http = require("http");
const server = http.createServer(app);

// User Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();

app.get("/", (req, res) => {
  res.send(
    "<h2 style='color:green;box-sizing:border-box; margin:0; background: #f3f3f9; height: 95vh;'>Server is Running!<h2>"
  );
});

//Routes
const authRoute = require("./src/routes/userRoute");
const tagAndTaskRoute = require("./src/routes/TagAndTaskRoute");
const taskSubmission = require("./src/routes/tasksSubmissionRoute");

// Routes
app.use("/api/v1/user", authRoute);
app.use("/api/v1/tags", tagAndTaskRoute);
app.use("/api/v1/tasks", taskSubmission);

// Handle Error
app.use(errorHandler);

// Listen Application
mongoose.connection.once("open", () => {
  console.log("connected to server");
  server.listen(PORT, () => console.log(`Server running in port no : ${PORT}`));
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});
