const { GraphQLList } = require('graphql');

const getProjection = require('../../utils/projection');
const TenantType = require('../types/tenant');
const Tenant = require('../models/tenant');

module.exports = {
  type: new GraphQLList(TenantType),
  // no args required since all tenants are returned
  resolve(root, args, source, fieldASTs) {
    return new Promise((resolve, reject) => {
      const projection = getProjection(fieldASTs);
      Tenant.find()
        .select(projection)
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
};
