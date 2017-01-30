var express = require('express');
var router = express.Router();
var mongoose        = require('mongoose');
var Movie           = require('../models/Movie');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('add')
});


router.post('/', function(req, res, next) {
  var newMovie = new Movie({
    title: req.body.movieTitle,
    year: req.body.movieYear,
    runtime: req.body.movieRuntime,
    genre: req.body.movieGenre,
    plot: req.body.moviePlot,
    poster: req.body.moviePoster
  });
  newMovie.save( (err) => {
    if(err) throw err;
    res.redirect('/add')
  } )
});

module.exports = router;
