const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const rentals = require('./modules/rentals');
const FakeDb = require('./fake_db');
const rentalRoute = require('./routes/rentals')
var cors = require('cors')

mongoose.connect(config.DB_URI).then(()=>{
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
})

const app = express();
app.use(cors())
app.use('/api/v1/rentals', rentalRoute);


const PORT = process.env.PORT || 3001;

app.listen(PORT,function(){
    console.log('hello');
})