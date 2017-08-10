const mongoose = require('mongoose');
// Terminal string styling done right
const chalk = require('chalk');

const seedCustomers = require('./customers');

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

const seeder = () => {
  seedCustomers().then(() => {
    console.log(chalk.green(`data seeded`));
    conn.close();
  });
};

seeder();
