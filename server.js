require("dotenv").config();

const express = require("express");
const projectRoutes = require("./routes/projectRoutes");

// express app
const app = express();

// port
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/projects", projectRoutes);

// listen for request
app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
