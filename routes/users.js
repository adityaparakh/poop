var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var user = req.body.user;
  var users = [];
  for(var i =0; i<10; i++) {
    users.push(user)
  }
  return res.json({data: users});
});

module.exports = router;
