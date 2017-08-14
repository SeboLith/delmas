// Terminal string styling done right
const chalk = require('chalk');
// Import the mongoose data model
const Property = require('../models/property');

const Properties = require('./collections/properties');

module.exports = mongooseConn => {
  var propertyOps = [];

  Properties.forEach(function(property) {
    propertyOps.push(savePropertyAsync(property));
  });

  return Promise.all(propertyOps);

  function savePropertyAsync(property) {
    return new Promise(function(resolve, reject) {
      new Property(property).save((err, savedProperty) => {
        if (err) {
          console.log(chalk.red(err));
          reject(err);
        } else {
          console.log(
            chalk.blue(`Property with _id: ${savedProperty._id} seeded`)
          );
          resolve();
        }
      });
    });
  }
};
