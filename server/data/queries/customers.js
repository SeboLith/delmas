const { GraphQLList } = require('graphql');

const getProjection = require('../../utils/projection');
const CustomerType = require('../types/customer');
const Customer = require('../models/customer');

module.exports = {
  type: new GraphQLList(CustomerType),
  // no args required since all customers are returned
  resolve(root, args, source, fieldASTs) {
    return new Promise((resolve, reject) => {
      const projection = getProjection(fieldASTs);
      Customer.find()
        .select(projection)
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
};
