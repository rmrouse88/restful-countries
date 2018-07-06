const express = require('express');
const Twitter = require('twitter');
const mongo = require('mongoose');

require('dotenv').config();

console.log(process.env.CONSUMER_KEY)

console.log('what the hell')

const app = express();
app.listen(port=3000, () => {
    console.log('Express is connected on port 3000!');
});

const router = express.Router();

router.get('/', function(req,res,next) {
    res.send('hello world, it is me on 3000 sorta kinda!');
});

router.get('/tweetstream', function(req,res,next) {
    
})

app.use("/welcome", router);

app.use("/tweetstream")

twitter = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

const stream = twitter.stream('statuses/filter', {track: 'javascript', filter_level: 'low'}, function(stream) { 
    stream.on('data', function(event) {
        console.log(event);
    });

    stream.on('error', error => {
        console.log(error);
    });
    });


