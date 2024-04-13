var express = require('express');
var router = express.Router();
const axios = require('axios');

/**
 * This is used to query the Tripadvisor API
 * It returns the list of locations with their details
 */
router.get('/all', async function(req, res, next) {
    const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${process.env.TRIPADVISORKEY}&searchQuery=nature%20wildlife%20areas%20hiking%20trails&category=%22tours%22&latLong=1.35%2C103.8&radius=30&radiusUnit=km&language=en`;
    const options = {headers: {accept: 'application/json'}};
    
    try{
        const {data} = await axios.get(url,options)
        res.send(data.data)
    }catch(e){
        res.send({status:"failure",message:"Something went wrong. Please try again."})
    }

    
});

/**
 * This is used to query the Tripadvisor API
 * It returns the details of a specific location for the trails information page
 * It takes in the location id as the query parameter to make the query with TripAdvisor's API
 */
router.get('/:locationId', async function(req, res, next) {
    const url = `https://api.content.tripadvisor.com/api/v1/location/${req.params.locationId}/details?key=${process.env.TRIPADVISORKEY}&language=en`
    
    const options = {headers: {accept: 'application/json'}};
    
    try{
        const {data} = await axios.get(url,options)
        res.send(data)
    }catch(e){
        res.send({status:"failure",message:"Something went wrong. Please try again."})
    }

    
});

/**
 * This is used to query the SeraAPI API for images of the locations
 * It returns the photo of the place based on the location name passed in as the request body
 */
router.post('/location/photo', async function(req, res, next) {
    
    const {q} = req.body
    
    const url = `https://serpapi.com/search.json`
    
    const options = {
        params:{
            q: q + "Singapore",
            engine: "google_images",
            ijn: "0",
            api_key: process.env.SERPAPI_KEY 
        }
    };
    
    try{
        console.log('getting photo')
        const {data} = await axios.get(url,options)
        
        res.send(data)
    }catch(e){
        res.send({status:"failure",message:"Something went wrong. Please try again."})
    }

    
});

module.exports = router;