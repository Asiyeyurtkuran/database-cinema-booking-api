const express = require("express");
const moviesController = require('../controllers/movies');

const router = express.Router();

// In index.js, we told express that the /customer route should use this router file
// The below /register route extends that, so the end result will be a URL
// that looks like http://localhost:4000/customer/register
router.get('/', moviesController.getMovies);

router.post("/", moviesController.createMovie);

router.get('/:id',moviesController.getMovieById)

router.put('/:id', moviesController.updateMovie);


module.exports = router;
