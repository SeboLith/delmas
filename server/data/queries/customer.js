const { GraphQLString } = require('graphql');

const getProjection = require('../../utils/projection');
const CustomerType = require('../types/customer');
const Customer = require('../models/customer');

module.exports = {
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
