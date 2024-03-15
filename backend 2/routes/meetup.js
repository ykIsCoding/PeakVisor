require("dotenv").config()
const nodemailer = require("nodemailer")
var express = require('express');
var router = express.Router();
const axios = require('axios');
const { request, gql } =require('graphql-request')
const jwt = require('jsonwebtoken');
const fs = require('fs');
const privateKey = fs.readFileSync('private.key');

const eventsQuery = gql`
query($query: String!) {
    keywordSearch(input:{first:10},filter:{query:$query,lat:1.3521,lon:103.8198,source:EVENTS}){
       count
      pageInfo {
        endCursor
      }
      edges {
        node {
          id
          result {
        ... on Event {
          id
          title
          description
          image{
            id
            baseUrl
            source
          }
          dateTime
            duration
            endTime
            priceTier
            going
            maxTickets
          eventUrl
          # Additional fields related to events can be added here
        }
          }
        }
      }}
  }
`



router.get('/authenticate',async function(req, res, next) {
    //const codeEndpoint = `https://secure.meetup.com/oauth2/authorize?client_id=${process.env.MEETUP_CLIENTID}&response_type=code&redirect_uri=https://redirectmeto.com/http://localhost:4200/`
    const endpoint = `https://secure.meetup.com/oauth2/access?client_id=${process.env.MEETUP_CLIENTID}&client_secret=${process.env.MEETUP_SECRET}&grant_type=authorization_code&redirect_uri=https://redirectmeto.com/http://localhost:4200/&code=${process.env.MEETUP_CODE}`
    
    try{
        //const code = await axios.get(codeEndpoint)
        //console.log(code)
        const signed_jwt = {
            "sub": "414395483",
            "iss": process.env.MEETUP_CLIENTID,
            "aud": "api.meetup.com",
            "exp": "3600"
          }
        
        jwt.sign(
          {},
          privateKey,
          {
            algorithm: 'RS256',
            issuer: process.env.MEETUP_CLIENTID,
            subject: "414395483",
            audience: 'api.meetup.com',
            //keyid: '{SIGNING_KEY_ID}',
            expiresIn: 120
          }
        );
        const jwtendpoint = `https://secure.meetup.com/oauth2/accessgrant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
        const {data} = await axios.post(jwtendpoint)
        const {access_token,refresh_token,expires_in} = data
        console.log(data)
        //set up auto refresh token
        setTimeout(async ()=>{
            const nd = await refreshToken(refresh_token)
            console.log(nd)
        },10000)
        
        //console.log(data)
    }catch(e){
        console.log(e)
    }
    next()
})

async function refreshToken(refresh_token){
    const endpoint = `https://secure.meetup.com/oauth2/access?client_id=${process.env.MEETUP_CLIENTID}&client_secret=${process.env.MEETUP_SECRET}&grant_type=refresh_token&refresh_token=${refresh_token}`
    const {data} = await axios.post(endpoint)
    return data
}

router.post('/events', async function(req, res, next) {
    const endpoint = ''
    const result = await request(endpoint,eventsQuery)
    next()
});


module.exports = router;