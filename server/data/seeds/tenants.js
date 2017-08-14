// Terminal string styling done right
const chalk = require('chalk');
// Import the mongoose data model
const Tenant = require('../models/tenant');

const tenants = require('./collections/tenants');

module.exports = mongooseConn => {
  var tenantOps = [];

  tenants.forEach(function(tenant) {
    tenantOps.push(saveTenantAsync(tenant));
  });

  return Promise.all(tenantOps);

  function saveTenantAsync(tenant) {
    return new Promise(function(resolve, reject) {
      new Tenant(tenant).save((err, savedTenant) => {
        if (err) {
          console.log(chalk.red(err));
          reject(err);
        } else {
          console.log(chalk.blue(`tenant with _id: ${savedTenant._id} seeded`));
          resolve();
        }
      });
    });
  }
};
