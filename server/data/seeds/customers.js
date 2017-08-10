// Terminal string styling done right
const chalk = require('chalk');
// Import the mongoose data model
const Customer = require('../models/customer');

const customers = require('./data/customers');

module.exports = mongooseConn => {
  var customerOps = [];

  customers.forEach(function(customer) {
    customerOps.push(saveCustomerAsync(customer));
  });

  return Promise.all(customerOps);

  function saveCustomerAsync(customer) {
    return new Promise(function(resolve, reject) {
      new Customer(customer).save((err, savedCustomer) => {
        if (err) {
          console.log(chalk.red(err));
          reject(err);
        } else {
          console.log(
            chalk.blue(`Customer with _id: ${savedCustomer._id} seeded`)
          );
          resolve();
        }
      });
    });
  }
};
