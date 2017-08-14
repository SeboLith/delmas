const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'TenantInput',
  fields: {
    name: {
      type: GraphQLString
    },
    phone: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    }
  }
});
