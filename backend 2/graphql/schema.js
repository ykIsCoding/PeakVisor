const { GraphQLSchema, GraphQLObjectType, GraphQLString } =require('graphql');

/**
 * A GraphQL Schema for querying the API of meetup.com
 *
 */
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootEventQuery',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world',
      },
    },
  }),
});