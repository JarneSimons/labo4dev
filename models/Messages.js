const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messagesSchema = new Schema({
    "name": String,
    "user": String,
    "text": String,
});

const messages = mongoose.model('Messages', messagesSchema);

module.exports = messages;