const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const CONFIG = require('../config/weatherAPI');
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const asyncSet = promisify(client.set).bind(client)
const asyncGet = promisify(client.get).bind(client)
const asyncExists = promisify(client.exists).bind(client)
const asyncExpire = promisify(client.expire).bind(client)

client.flushdb((error, response) => {
    if (error) {throw new Error("Error while flushing")}
});

router.post('/', async (req, res, next) => {
    const locale = req.body.city;
    if (await asyncExists(locale)) {
        let cachedData = await asyncGet(locale);
        let cachedObject = JSON.parse(cachedData);
        let response = {
            data: cachedObject,
            cached: true
        }
        res.send(response);
    }
    else {
        //call api and cache
        let rawData = await fetch(CONFIG.fetchOptions.url+locale.toString());
        let clean = await rawData.json();
        await asyncSet(locale, JSON.stringify(clean), 'ex', 15);
        let response = {
            data: clean,
            cached: false
        }
        //15 sec timeout
        await asyncExpire(locale, 15);
        res.send(response);
    }
})


const response = async locale => {
    let raw = await fetch(CONFIG.fetchOptions.url+locale.toString());
    let clean = await raw.json();
    return clean;
}

module.exports = router;