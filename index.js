const express = require("express");
const cors = require('cors');
const qoutesRouter = require("./routes/quotes")
const moviesRouter = require("./routes/movies")

const app = express();
app.use(express.static('public'))
const port = process.env.PORT || 8080;

app.use(cors())

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html")
});

app.get("/doc/quotes", (req, res) => {
  res.sendFile(__dirname + "/views/quotes_doc.html")
});

app.get("/doc/movies", (req, res) => {
  res.sendFile(__dirname + "/views/movies_doc.html")
});


app.use("/quotes", qoutesRouter)
app.use("/movies", moviesRouter)


app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});