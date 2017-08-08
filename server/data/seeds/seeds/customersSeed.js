// Terminal string styling done right
const chalk = require('chalk');
// Import the mongoose data model
const Customer = require('../../models/customerModel');

const customers = [
  {
    email: 'isidro_von@hotmail.com',
    name: 'Torrey Veum',
    age: 22
  },
  {
    email: 'frederique19@gmail.com',
    name: 'Micah Sanford',
    age: 24
  },
  {
    email: 'fredy54@gmail.com',
    name: 'Hollis Swift',
    age: 26
  },
  {
    email: 'braxton29@hotmail.com',
    name: 'Perry Leffler',
    age: 28
  },
  {
    email: 'turner59@gmail.com',
    name: 'Janelle Hagenes',
    age: 30
  },
  {
    email: 'halie47@yahoo.com',
    name: 'Charity Bradtke',
    age: 32
  },
  {
    email: 'loren_yundt@gmail.com',
    name: 'Dejah Kshlerin',
    age: 34
  },
  {
    email: 'kenton_macejkovic80@hotmail.com',
    name: 'Ellen Schaefer',
    age: 36
  },
  {
    email: 'pascale5@yahoo.com',
    name: 'Sven Funk',
    age: 38
  },
  {
    email: 'frank34@yahoo.com',
    name: 'Ryleigh Cole',
    age: 40
  }
];

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
