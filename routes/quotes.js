const router = require('express').Router();

const quotes = require("../res/quotes.json")

router.get("/",(req, res) => {
    res.status(200).json(quotes);
});

router.get("/random", (req, res) => {
    const rand = Math.floor(Math.random()*10)
    res.json(quotes[rand])
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    const quote = quotes.find(q => q.id == id)
    if(quote) {
        res.status(200).json(quote)
    } else {
        res.status(404).json(null)
    }
})

router.get("/doc/view", (req, res) => {
    res.sendFile(__dirname + "/views/quotes_doc.html")
});

module.exports = router;