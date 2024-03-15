var express = require('express');
var router = express.Router();
const axios = require('axios');


router.get('/all', async function(req, res, next) {
    const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${process.env.TRIPADVISORKEY}&searchQuery=nature%20wildlife%20areas%20hiking%20trails&category=%22tours%22&latLong=1.35%2C103.8&radius=30&radiusUnit=km&language=en`;
    const options = {headers: {accept: 'application/json'}};
    
    try{
        const {data} = await axios.get(url,options)
        res.send(data.data)
    }catch(e){
        console.log(e)
    }

    next()
});

router.get('/:locationId', async function(req, res, next) {
    const url = `https://api.content.tripadvisor.com/api/v1/${req.params.locationId}/7269083/details?key=${process.env.TRIPADVISORKEY}`;
    const options = {headers: {accept: 'application/json'}};
    
    try{
        const {data} = await axios.get(url,options)
        console.log(data)
        res.send(data.data)
    }catch(e){
        console.log(e)
    }

    next()
});

router.get('/:locationId/photo', async function(req, res, next) {
    const url = `https://api.content.tripadvisor.com/api/v1/location/${req.params.locationId}/photos?&key=${process.env.TRIPADVISORKEY}&language=en`;
    const options = {headers: {accept: 'application/json'}};
    
    try{
        const {data} = await axios.get(url,options)
        console.log('getting photo')
        console.log(data)
        res.send(data.data)
    }catch(e){
        console.log(e)
    }

    next()
});

module.exports = router;