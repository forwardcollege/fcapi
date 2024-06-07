const express = require("express");
const cors = require('cors');
const qoutesRouter = require("./routes/quotes")
const moviesRouter = require("./routes/movies")

const app = express();
const port = process.env.PORT || 8080;

app.use(cors())

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/res/quotes_doc.html")
});

app.use("/quotes", qoutesRouter)
app.use("/movies", moviesRouter)

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});