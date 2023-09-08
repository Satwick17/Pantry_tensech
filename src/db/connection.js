const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Pantry", {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Succesful");
  })
  .catch((err) => {
    console.log("connection failed!");
  });

