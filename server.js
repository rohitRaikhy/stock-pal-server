PASSWORD = 'admin';
DBNAME = 'stock-pal';


const express = require("express");
const app = express()

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://admin:${PASSWORD}@cluster0.vdinw.mongodb.net/${DBNAME}?retryWrites=true&w=majority`)

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./controllers/users.controller.server')(app)

app.listen(3000)
