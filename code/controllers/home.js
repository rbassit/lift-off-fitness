var express = require('express');
var router = express.Router();
var models = require('../models');

// middleware that is specific to this router
// applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('home Controller :: Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  models.User.findAll({})
    .then(function (home) {
      if (home != null) {
        res.render('home/home', {home: home});
      } else {
        res.send('home page not found');
      }
    });
});


module.exports = router;