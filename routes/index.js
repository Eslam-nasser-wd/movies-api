var express         = require('express');
var router          = express.Router();
var mongoose        = require('mongoose');
var Movie           = require('../models/Movie');

/* GET home page. */
router.get('/', function(req, res, next) {
  Movie.find({}, function(err, data){
    res.json(data);
  })
});

router.get('/id/:movie_id', function(req, res, next) {
  Movie.findById(req.params.movie_id)
    .exec(function(err, data){

      if(err){ 
        res.status(404);
        var error_found = {
          message: 'معلش يا معلم مش لاقي والله الي انت عايزه ... تعالي بكرا'
        }
        res.json(error_found);
      }else if(data){
        res.json(data);
      }else{
        res.status(500);
        var error_found = {
          message: 'فيه حاجه غلط! و شكلي هزعلك'
        }
        res.json(error_found);
      }
    })
});

module.exports = router;
