const express = require('express')
const twitter = require('twitter')
const mongo = require('mongoose')
require('dotenv').config()

const app = express()

console.log(process.env.TWITTER_CONSUMER_KEY)

// const client = new twitter({
//     consumer_key
// })
