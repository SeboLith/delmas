const { GraphQLString } = require('graphql');

const getProjection = require('../../utils/projection');
const CustomerType = require('../types/customerType');
const Customer = require('../models/customerModel');

module.exports = {
  CustomerType,
  type: CustomerType,
  args: {
    id: {
      name: 'id',
      type: GraphQLString
    }
  },
  resolve(root, { id }, source, fieldASTs) {
    return new Promise((resolve, reject) => {
      const projection = getProjection(fieldASTs);
      Customer.findById(id)
        .select(projection)
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
};
