const express = require('express')
const path = require('path')
const homeRoute = require('./routes/index.routes')
const { engine } = require('express-handlebars');

const app = express()

//SETTINGS HANDLEBARS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
    extname: '.hbs'
}));

//MIDDLEWARES

//ROUTES
app.use(homeRoute)

module.exports = app