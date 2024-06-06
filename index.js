const express = require("express");
const cors = require('cors');
const qoutesRouter = require("./routes/quotes")

const app = express();
const port = process.env.PORT || 8080;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello from Space! 🚀");
});

app.use("/quotes", qoutesRouter)

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});