const { GraphQLNonNull } = require('graphql');

// const getProjection = require('../../utils/projection');
const CustomerType = require('../types/customer');
const Customer = require('../models/customer');
const CustomerInputType = require('../types/input/customer');

module.exports = {
  type: CustomerType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(CustomerInputType)
    }
  },
  resolve(root, { data }) {
    return new Promise((resolve, reject) => {
      const newCustomer = new Customer(data);

      newCustomer.save().then(data => resolve(data)).catch(err => reject(err));
    });
  }
};
