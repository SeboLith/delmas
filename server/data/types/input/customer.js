const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'CustomerInput',
  fields: {
    name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    }
  }
});
