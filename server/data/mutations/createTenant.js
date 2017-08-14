const { GraphQLNonNull } = require('graphql');

const TenantType = require('../types/tenant');
const Tenant = require('../models/tenant');
const TenantInputType = require('../types/input/tenant');

module.exports = {
  type: TenantType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(TenantInputType)
    }
  },
  resolve(root, { data }) {
    return new Promise((resolve, reject) => {
      const newTenant = new Tenant(data);

      newTenant.save().then(data => resolve(data)).catch(err => reject(err));
    });
  }
};
