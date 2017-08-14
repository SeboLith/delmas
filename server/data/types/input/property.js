const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'PropertyInput',
  fields: {
    number: {
      type: GraphQLString
    },
    street: {
      type: GraphQLString
    },
    city: {
      type: GraphQLString
    },
    state: {
      type: GraphQLString
    },
    zip: {
      type: GraphQLString
    }
  }
});
