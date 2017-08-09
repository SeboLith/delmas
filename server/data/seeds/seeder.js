const seedCustomers = require('./seeds/customers');

const seeder = () => {
  seedCustomers();
};

module.exports = seeder;
