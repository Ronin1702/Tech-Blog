require('dotenv').config();

// initialize variables
const path = require('path'),
      express = require('express'),
      session = require('express-session'),
      exphbs = require('express-handlebars'),
      routes = require('./controllers'),
      helpers = require('./utils/helpers'),
      sequelize = require('./config/connection'),
      SequelizeStore = require('connect-session-sequelize')(session.Store),
      app = express(),
      PORT = process.env.PORT || 3000,
      handlebars = exphbs.create({ helpers }),
      sesh = {
        // secret used to sign the session ID cookie
        secret: process.env.SECRET, 
        cookie: {
          // session expiration in milliseconds (30 minutes)
          maxAge: 1800000, 
        },
        // forces the session to be saved back to the session store, even if it hasn't been modified
        resave: false, 
        // forces a session that is "uninitialized" to be saved to the store
        saveUninitialized: true, 
        store: new SequelizeStore({
          // sequelize database connection
          db: sequelize 
        })
      };

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the session middleware
app.use(session(sesh));
// configure the view engine to use Handlebars templates
app.engine('handlebars', handlebars.engine); 
// set the default view engine to handlebars
app.set('view engine', 'handlebars'); 

// serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public'))); 

// Register routes
app.use(routes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is wrong!');
});

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

// Sync sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port 'http://localhost:${PORT}'!`);
  });
});
