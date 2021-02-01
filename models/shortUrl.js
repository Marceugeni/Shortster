//DB Schema with long Url object, short Url and the clicks for each short link.

const mongoose = require('mongoose')
const shortId = require('shortid')


// The actual Schema
const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number, 
        required: true, 
        default: 0
    }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)