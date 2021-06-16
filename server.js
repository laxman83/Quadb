const express = require("express");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const cors = require("cors");
const db = require("./routes/db.routes");
console.log("db is", db);
const app = express();
const port = 3001;

let coreOption = {
  origin: "http://localhost:5000",
};

app.use(cors(coreOption));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
app.get("/tickersData", db.getData);
//app.post("/tickersData", db.getApiData);
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
