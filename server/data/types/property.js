const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');
const mongoose = require('mongoose');
const Property = require('../models/property');

const TenantType = require('./tenant');

// Property Type
module.exports = new GraphQLObjectType({
  name: 'Property',
  fields: () => ({
    id: { type: GraphQLString },
    number: { type: GraphQLString },
    unit: { type: GraphQLString },
    street: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zip: { type: GraphQLString },
    tenants: {
      type: new GraphQLList(TenantType),
      resolve(parentValue) {
        return Property.findTenants(parentValue.id);
      }
    },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString }
  })
});
