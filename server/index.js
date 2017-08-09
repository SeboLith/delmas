const express = require('express');
const expressGraphQL = require('express-graphql');
const axios = require('axios');
const chalk = require('chalk');
const mongoose = require('mongoose');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const schema = require('./data/schema');
const seeder = require('./data/seeds/seeder');

require('dotenv').config();

// Here are MongoDB related settings.
const options = {
  server: {
    socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 }
  },
  replset: {
    socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 }
  },
  useMongoClient: true
};

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, options);
const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
  console.log('Connected to Mongo DB!');
});

// Seed our database in the develooment environment
if (dev) {
  seeder();
}

app.prepare().then(() => {
  const server = express();

  // The Graphql API
  server.use(
    '/graphql',
    expressGraphQL({
      schema,
      pretty: dev,
      graphiql: dev
    })
  );

  // The User API
  server.get('/api/users/:username', (req, res) => {
    axios
      .get(`https://api.github.com/users/${req.params.username}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => res.send(err));
  });

  // The wildcard endpoint
  server.get('*', (req, res) => {
    return handle(req, res);
  });
  const port = process.env.PORT || 3000;

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on port ${port}...`);
  });
});
