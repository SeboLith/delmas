// Terminal string styling done right
const chalk = require('chalk');

const seedCustomers = require('./customers');
const conn = require('../../utils/dbConnect');

const seeder = () => {
  seedCustomers().then(() => {
    console.log(chalk.green(`data seeded`));
    conn.close();
  });
};

seeder();
