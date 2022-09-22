const { ApolloServer, gql } = require('apollo-server-lambda')
const { Client, query } = require("faunadb");

const dotenv = require("dotenv");
dotenv.config();

var client = new Client({
  secret: process.env.FAUNADB_ADMIN_SECRET,
});


const typeDefs = gql`
  type Query {
    todos: [Todo]!
  }

  type Todo {
    id: ID!
    value: String!
    completed: Boolean!
  }

  type Mutation{
    addTodo(value: String!):Todo
    updateTodo(id: ID!, completed: Boolean!): Todo
    removeTodo(id: ID!) : Todo
  }  
`

const resolvers = {
  Query: {
    todos: async (root, args, {user}) => {
      if(!user){
        return [];
      }
      else{
        try{
          const response = await client.query(
            query.Paginate(query.Match(query.Index("todos_by_user"), user)))

            return response.data.map(({ref,value,completed}) => ({
              id: ref.id,
              value,
              completed

            }))
        }catch(e){
          return e.toString()
        }
      }
    }
  },
  Mutation: {
    addTodo: async (_,{value}, {user}) => {
      if(!user){
        throw new Error ("Must be a authenticated user to create todo")
      }
      // else{
        // try{
          const response = await client.query(query.Create(query.Collection("todos"),
            { data: { value: value, completed: false, user: user }}));

          return{
            ...response.data,
            id: response.ref.id
          }
      //   }catch(e){
      //   return e.toString();
      //   }
      // }
    },

    updateTodo: async(_,{id, completed}, {user}) => {
      if(!user){
        throw new Error("Must be a authenticated user to update a todo")
      }
      else{
        try{
            const response = await client.query(
              query.Update(q.ref(query.Collection("todos"), id),
              { data: { completed: completed } })
            )
      
            return{
              id : result.ref.id,
              value: result.data.value,
              completed: result.data.completed
            }
          }catch(e){
            return e.toString();
          }
      }
      
    },

    removeTodo: async(_, {id}, {user}) => {
      if(!user){
        throw new Error("Must be a authenticated user to remove a todo")
      }
      else{
        try{
          const response = client.query(
            query.Delete(q.ref(query.Collection("todos"), id)
          ));

          return{
              id : response.ref.id,
              value: response.data.value,
              completed: response.data.completed
          }
        }catch(e){
          return e.toString();
        }
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({context})=>{
    if (context.clientContext.user){
      return(
        {
          user: context.clientContext.user.sub
        }
      )
    }
    else{
      return {};
    }
  },
  playground: true,
  introspection: true
})

const handler = server.createHandler({
  cors:{
    origin: "*",
    Credentials: true,
  }
})

module.exports = { handler }
