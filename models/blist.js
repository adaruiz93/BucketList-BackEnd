const mongoose = require('mongoose');

const bListSchema = mongoose.Schema({
    name: { type: String, require: true },
    location: {type: String},
    activity: {type: String},
    friends: [String],
    costs: {type: Number}
}, { timestamp: true })

module.exports = mongoose.model('BList', bListSchema)
