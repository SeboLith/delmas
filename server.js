const express = require('express');
const axios = require('axios');
const { parse } = require('url');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

require('dotenv').config();
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
app.prepare().then(() => {
  const server = express();
  // CUSTOM ROUTES GO HERE
  server.get('/api/users/:username', (req, res) => {
    // const mergedQuery = Object.assign({}, req.query, req.params);
    // return app.render(req, res, '/api', mergedQuery);
    axios
      .get(`https://api.github.com/users/${req.params.username}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => res.send(err));
  });
  // THIS IS THE DEFAULT ROUTE, DON'T EDIT THIS
  server.get('*', (req, res) => {
    return handle(req, res);
  });
  const port = process.env.PORT || 3000;

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on port ${port}...`);
  });
});
