const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Query {
    todos: [Todo!]
  }
  type Todo {
    id: ID!
    content: String!
    completed: Boolean!
  }
  type Mutation{}
`

const resolvers = {
  Query: {
    todos: async ()
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
