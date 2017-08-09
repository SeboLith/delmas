// Terminal string styling done right
const chalk = require('chalk');
// Import the mongoose data model
const Customer = require('../../models/customer');

const customers = require('../data/customers');

module.exports = () => {
  Customer.collection.remove();
  console.log(chalk.yellow(`Customers collection dropped`));
  customers.map(customer => {
    return new Customer(customer).save((err, savedCustomer) => {
      if (err) return err;
      console.log(chalk.blue(`Customer with _id: ${savedCustomer._id} seeded`));
    });
  });
};
