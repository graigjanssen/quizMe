var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.json({message: "Hello from your very own back end!"})
});

module.exports = router;
