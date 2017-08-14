// Terminal string styling done right
const chalk = require('chalk');

const seedTenants = require('./tenants');
const seedProperties = require('./properties');
const conn = require('../../utils/dbConnect');

const seeder = () => {
  seedProperties().then(seedTenants).then(() => {
    console.log(chalk.green(`data seeded`));
    conn.close();
  });
};

seeder();
