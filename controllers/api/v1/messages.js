const Messages = require('../../../models/Messages');


// get messages from database
const getMessages = async (req, res) => {
    let user = req.query.user;

    // If the user query parameter is present, filter the messages by user else get all
    if (user) {
        try {
            const messages = await Messages.find({ user: user });
            res.json({
                status: 'success',
                data: {
                    messages: messages
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                status: 'error',
                message: 'Failed to retrieve messages'
            });
        }
    } else {
        try {
            const messages = await Messages.find();
            res.json({
                status: 'success',
                data: {
                    messages: messages
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                status: 'error',
                message: 'Failed to retrieve messages'
            });
        }
    }
};

// get message by id from database
const getMessageId = async (req, res) => {
    try {
        const message = await Messages.findById(req.params.id);
        res.json({
            status: 'success',
            data: {
                message: message
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            message: 'Failed to retrieve message'
        });
    }
};






// post messages to database
const postMessages = async (req, res) => {
    try {    

        // Create a new Message instance with data from the request body
        let message = new Messages();
        message.user = req.body.message.user;
        message.text = req.body.message.text;

        // Save the message to the database
        const savedMessage = await message.save();

        res.json({
            status: 'success',
            data: {
                message: savedMessage
            }
        });
    } catch (err) {
        console.error(err); // Log the error to the console
        console.log(req.body);
        res.status(500).json({
            status: 'error',
            message: 'Failed to save message',
            error: err
        });
    }
};

const putMessagesId = async (req, res) => {
    try {
        const message = await Messages.findById(req.params.id);
        message.user = req.body.user;
        message.text = req.body.text;
        const savedMessage = await message.save();
        res.json({
            status: 'success',
            data: {
                message: savedMessage
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            message: 'Failed to save message',
            error: err
        });
    }
};

const deleteMessagesId = async (req, res) => {
    try {
        const message = await Messages.findById(req.params.id);
        if (!message) {
            return res.status(404).json({
                status: 'error',
                message: 'Message not found'
            });
        }

        // Use deleteOne method to remove the document
        const deletedMessage = await Messages.deleteOne({ _id: req.params.id });

        if (deletedMessage.deletedCount > 0) {
            res.json({
                status: 'success',
                data: null
            });
        } else {
            return res.status(500).json({
                status: 'error',
                message: 'Failed to delete message'
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            message: 'Failed to delete message',
            error: err
        });
    }
};

module.exports.getMessages = getMessages;
module.exports.getMessageId = getMessageId;
module.exports.postMessages = postMessages;
module.exports.putMessagesId = putMessagesId;
module.exports.deleteMessagesId = deleteMessagesId;