const express = require('express')
const path = require('path')
const morgan = require('morgan')
const homeRoute = require('./routes/index.routes')
const { engine } = require('express-handlebars');
const database = require('./database');

const app = express()

database()

//SETTINGS HANDLEBARS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname: '.hbs'
}));

//MIDDLEWARES
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

//ROUTES
app.use(homeRoute)

module.exports = app