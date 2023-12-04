const express = require('express');
const router = express.Router();
const controllerMessages = require('../../../controllers/api/v1/messages')

// get api/v1/messages from mongodb
router.get("/", controllerMessages.getMessages);

// get api/v1/messages/:id from mongodb
router.get('/:id', controllerMessages.getMessageId)
  
// post api/v1/messages to mongodb
router.post('/', controllerMessages.postMessages)

// put api/v1/messages/:id to mongodb
router.put('/:id', controllerMessages.putMessagesId)

// delete api/v1/messages/:id from mongodb
router.delete('/:id', controllerMessages.deleteMessagesId)

module.exports = router;