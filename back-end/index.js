const express = require("express");
const cors = require("cors");
const configureDB = require("./config/database");
const router = require("./config/routes");
const PORT = 3060;

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

configureDB();

app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
