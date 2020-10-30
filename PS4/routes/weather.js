const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/weatherAPI');

const response = async locale => {
    let rawReturn = await fetch(CONFIG.url+locale.toString());
    let cleanReturn = await rawReturn.json();
    return cleanReturn;
}

router.route('/').post( (req, res, next) => {
        response(req.body.cityName)
            .then(clean => res.render('weather', {'city' : clean.name, 'temp' : clean.tempF }))
            .catch(error => console.log("Failed to fetch JSON."))
    })

module.exports = router;