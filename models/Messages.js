const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messagesSchema = new Schema({

    id: {
        type: Number,
        required: false,
    },
    user: {
        type: String,
        required: false,
    
    },
    text: String,
});

const messages = mongoose.model('Messages', messagesSchema);

module.exports = messages;