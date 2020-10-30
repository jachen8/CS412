const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.send("ps4 route");
})

module.exports = router;