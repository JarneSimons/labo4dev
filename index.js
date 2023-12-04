const express = require('express')
const app = express()
const port = 3000
const routerMessages = require('./routers/api/v1/messages')
require('dotenv').config()




const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB).then(() => {
    console.log("Connected to Database");
    }
).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});



app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use("/api/v1/messages", routerMessages)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})