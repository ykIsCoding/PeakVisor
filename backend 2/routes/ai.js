/**
 * The file contains the routes for making requests to OpenAI's API
 */

require("dotenv").config()
const { OpenAI } = require("openai");
var express = require('express');
var router = express.Router();

/**
 * /chat takes in the location as a query param and makes a get request to openAI's API
 * The expected response is generated from ChatGPT 3.5 Turbo LLM
 */

router.get('/chat', async function(req, res, next) {

    const {location} = req.query
    try{
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });
      async function runCompletion () {
        const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        messages:[{"role": "user","content":`Give me a summary of this place ${location}. Make sure it is under 4000 characters. Only use words. Give me some tips when hiking there.`}],
        max_tokens:4000
        });
        
        res.send({status:'success',message:completion.choices[0].message.content.split('\n')})
        return
    }
    runCompletion();
    }catch(e){
        res.send({status:"failure",message:"an error occurred."})
    }
})

module.exports = router;