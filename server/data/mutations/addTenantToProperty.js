const { GraphQLString } = require('graphql');

const PropertyType = require('../types/property');
const Property = require('../models/property');

module.exports = {
  type: PropertyType,
  args: {
    tenantId: { type: GraphQLString },
    propertyId: { type: GraphQLString }
  },
  resolve(parentValue, { tenantId, propertyId }) {
    return Property.addTenant(propertyId, tenantId);
  }
};
