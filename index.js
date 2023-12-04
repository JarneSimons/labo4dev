const express = require('express')
const app = express()
const port = 3000
const routerMessages = require('./routers/api/v1/messages')


const mongoose = require('mongoose');
mongoose.connect('process.env.MONGODB', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    dbname: "messages"
}
).then(() => { 
    console.log("MongoDB connected...")
}).catch((err) => {
    console.log('MongoDB connection error:', err);

});


app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use("/api/v1/messages", routerMessages)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})