const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} = require('graphql');

// Tenant Type
module.exports = new GraphQLObjectType({
  name: 'Tenant',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    phone: { type: GraphQLString },
    email: { type: GraphQLString },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString }
  })
});
