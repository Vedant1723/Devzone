const express = require("express");

const app = express();

//Express Server
app.get("/", (req, res) => res.send("API Running Perfectly"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
