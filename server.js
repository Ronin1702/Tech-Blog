const express = require('express');
const routes = require('./controllers/homeRoutes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    console.log(`App listening on port ${PORT}!`);
  });
});
