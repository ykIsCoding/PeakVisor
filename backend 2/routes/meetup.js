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
query {
    keywordSearch(input:{first:30},filter:{query:"hiking",lat:1.3521,lon:103.8198,source:EVENTS}){
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
      jwt.sign(
          {},
          privateKey,
          {
            header:{
              "kid": process.env.MEETUP_SIGNINGKEY,
              "typ": "JWT",
              "alg": "RS256"
            },
            algorithm: 'RS256',
            issuer: process.env.MEETUP_CLIENTID,
            subject: '414395483',
            audience: 'api.meetup.com',
            keyid: process.env.MEETUP_SIGNINGKEY,
            expiresIn: 120
          },async (e,t)=>{

            const jwtendpoint = `https://secure.meetup.com/oauth2/access`
            const data = await axios.post(jwtendpoint,{
              grant_type:'urn:ietf:params:oauth:grant-type:jwt-bearer',
              assertion:t,
            },{
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            })
            
            const {access_token,refresh_token,expires_in} = data.data
            res.send(access_token)
          }
        );



    }catch(e){
      res.send({status:"failure",message:"Something went wrong. Please try again."})
    }
    
})

async function refreshToken(refresh_token){
    const endpoint = `https://secure.meetup.com/oauth2/access?client_id=${process.env.MEETUP_CLIENTID}&client_secret=${process.env.MEETUP_SECRET}&grant_type=refresh_token&refresh_token=${refresh_token}`
    const {data} = await axios.post(endpoint)
    return data
}

router.post('/events', async function(req, res, next) {
  try{
    const endpoint = 'https://api.meetup.com/gql'
    const {token} = req.body
    const result = await request(endpoint,eventsQuery,{},{
      Authorization: `bearer ${token}`
    })
    let resArr = []
    for(let x=0;x<result.keywordSearch["edges"].length;x++){
      resArr.push(result.keywordSearch["edges"][x].node)
    }
    res.send(resArr)
  }catch(e){
    res.send({status:"failure",message:"Something went wrong. Please try again."})
  }
});


module.exports = router;