const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');

// app.use(express.static(path.join(__dirname, 'public')));

const express = require('express');
// const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    loggedIn: false,
  };

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));

const helpers = require('./utils/helpers');

// Configure Handlebars as view engine
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const routes = require('./controllers/');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening to you'));
});






