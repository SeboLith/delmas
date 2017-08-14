const { GraphQLString } = require('graphql');

const getProjection = require('../../utils/projection');
const TenantType = require('../types/tenant');
const Tenant = require('../models/tenant');

module.exports = {
  type: TenantType,
  args: {
    id: {
      name: 'id',
      type: GraphQLString
    }
  },
  resolve(root, { id }, source, fieldASTs) {
    return new Promise((resolve, reject) => {
      const projection = getProjection(fieldASTs);
      Tenant.findById(id)
        .select(projection)
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
};
