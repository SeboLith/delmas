const mongoose = require('mongoose');

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

module.exports = conn;
