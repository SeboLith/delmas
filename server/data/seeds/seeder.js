const seedCustomers = require('./seeds/customersSeed');

const seeder = () => {
  seedCustomers();
};

module.exports = seeder;
