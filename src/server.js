const express = require('express');
const app = express();
const methodOverride = require('method-override');
const path = require('path');
const con = require('./config/database');

const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function(req, res, next){
    req.con = con;
    next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride("_method"));

const userRouter = require('./routes');
app.use('/', userRouter);


app.listen(PORT, function(err){
   !err ? console.log('Server is running at port: ', PORT) : console.log(JSON.stringify(err));
});