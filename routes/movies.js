const router = require('express').Router();

const movies = require("../res/movies.json")

router.get("/",(req, res) => {
    res.status(200).json(movies);
});


router.get("/:id", (req, res) => {
    const id = req.params.id
    const movie = movies.find(q => q.id == id)
    if(movie) {
        res.status(200).json(movie)
    } else {
        res.status(404).json(null)
    }
})


module.exports = router;