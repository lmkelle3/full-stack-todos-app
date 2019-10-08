const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");

const port = process.env.PORT || 8000;

// app.use(cors)
app.use(bodyparser);

app.listen(port, () => console.log(`Listening on port: ${port}`));
