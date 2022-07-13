const express = require('express')
const app = express();
const cors = require("cors")();
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require('./routes/appRoutes');
const bodyParser = require('body-parser');
dotenv.config();

//connect mongodb 
try {
    mongoose.connect(
        process.env.DATABASELINK, { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(console.log("MongoDb Connected..."));
} catch (error) {
    console.log("Error Connecting to MongoDb");
    console.log(error);
    res.send(error);
}

// middlewares
app.use(cors);
app.use(express.json()); // has to appear before route handlers
app.use(bodyParser.json());

app.use('/api', routes);
try {
    app.listen(process.env.PORT, ()=>{
        console.log("server listening");
    })
} catch (error) {
    console.log("An Error Occured Starting Server\n");
    console.log(error);
}

