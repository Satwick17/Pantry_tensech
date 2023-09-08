const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/connection");

const Student = require("./schema/pantries");
const panRoute = require('./routers/p_routes');

app.use(express.json());
app.use(panRoute);


app.listen(port, () => {
  console.log(`Running on port no. ${port}`);
});
