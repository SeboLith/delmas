const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const queries = require('./queries');

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'query',
    fields: queries
  })
});
