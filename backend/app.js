require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin')
const connectDB = require('./config/db')

connectDB();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.use(adminRoutes.routes);

app.listen(process.env.PORT, () => {
    console.log('Listening at PORT',process.env.PORT);
})

