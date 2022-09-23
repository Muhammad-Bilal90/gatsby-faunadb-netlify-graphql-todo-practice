const { ApolloServer, gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello World',
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});

const serverHandler = server.createHandler({
cors: {
  origin: '*'
  }
});

exports.handler = (event, context, callback) => {
  return serverHandler(
    {
      ...event,
      requestContext: event.requestContext || {},
    },
    context,
    callback
  );
}

// const { ApolloServer, gql } = require("apollo-server-lambda");
// const faunadb = require("faunadb"),
//   q = faunadb.query


//   var client = new faunadb.Client({
//     secret: process.env.FAUNADB_ADMIN_SECRET,
//   })

// const typeDefs = gql`
//   type Query {
//     todos: [Todo]!
//   }
//   type Todo{
//       id: ID!
//       value: String!
//       done: Boolean!
//   }
//   type Mutation{
//       addTodo(value: String!):Todo
//       updateTodoDone(id: ID!): Todo
//   }
// `;

// const resolvers = {
//   Query: {
//     todos: async (_, args,{user}) => {
//       // if (!user){
//       //   return [];
//       // }
//       // else{

//         try{
        
//         const results = await client.query(
//           q.Paginate(q.Match(q.Index("todos_by_user"), user))
//       )

//       return results.data.map(([ref,value,done])=>({
//         id: ref.id,
//         value,
//         done
//       }))

//     }
//     catch(e){

//       return e.toString() 
//     }



//     // }



//     }
//   },
//   Mutation:{
//       addTodo: async (_,{value})=>{

//         // if (!user){
//         //   throw new Error ("Must be authenticated to insert todos")
//         // }
//         try{
//         const results = await client.query(
//           q.Create(q.Collection("todos"),{
//           data:{
//               value: value,
//               done: false,
//               owner: user
//           } 
//           })
//       );


//         return ({
//           ...results.data,
//           id: results.ref.id
//         }
//         )
//       }catch(e){
//         return e.toString();
//       }
//       },
//       updateTodoDone: async (_,{id}, {user})=>{

//         if (!user){
//           throw new Error ("Must be authenticated to update todos")
//         }

//         const results = await client.query(
//           q.Update(q.Ref(q.Collection("todos"),id),
//           {
//           data:{
//               done:true
//           }
//       }
//           )
//       )

//       return (
//         {
//           ...results.data,
//           id: results.ref.id
//         }
//       )

//       }
//   }
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   // context: ({context})=>{
//   //   if (context.clientContext.user){
//   //     return(
//   //       {
//   //         user: context.clientContext.user.sub
//   //       }
//   //     )
//   //   }

//   //   else{
//   //     return {};
//   //   }
    
//   // },
//   playground: true,
//   introspection: true
// });

// exports.handler = server.createHandler();


// import { ApolloServer, gql } from 'apollo-server-lambda';
// // import gql from 'graphql-tag';
// import { Client, query } from "faunadb";

// import { config } from "dotenv";
// config();

// const client = new Client({
//   secret: process.env.FAUNADB_ADMIN_SECRET,
// });


// const typeDefs = gql`
//   type Query {
//     todos: [Todo]!
//   }

//   type Todo {
//     id: ID!
//     value: String!
//     completed: Boolean!
//   }

//   type Mutation{
//     addTodo(value: String!):Todo!
//     updateTodo(id: ID!, completed: Boolean!): Todo!
//     removeTodo(id: ID!) : Todo!
//   }  
// `

// const resolvers = {
//   Query: {
//     todos: async (root, args, {user}) => {
//       if(!user){
//         return [];
//       }
//       else{
//         try{
//           const response = await client.query(
//             query.Paginate(query.Match(query.Index("todos_by_user"), user)))

//             return response.data.map(([ref,value,completed]) => ({
//               id: ref.id,
//               value,
//               completed

//             }))
//         }catch(e){
//           return e.toString()
//         }
//       }
//     }
//   },
//   Mutation: {
//     addTodo: async (_,{value}, {user}) => {
//       if(!user){
//         throw new Error ("Must be a authenticated user to create todo")
//       }
//       // else{
//         // try{
//           const response = await client.query(query.Create(query.Collection("todos"),
//             { data: { value: value, completed: false, user: user }}));

//           return{
//             ...response.data,
//             id: response.ref.id
//           }
//       //   }catch(e){
//       //   return e.toString();
//       //   }
//       // }
//     },

//     updateTodo: async(_,{id, completed}, {user}) => {
//       if(!user){
//         throw new Error("Must be a authenticated user to update a todo")
//       }
//       else{
//         try{
//             const response = await client.query(
//               query.Update(q.ref(query.Collection("todos"), id),
//               { data: { completed: completed } })
//             )
      
//             return{
//               id : result.ref.id,
//               value: result.data.value,
//               completed: result.data.completed
//             }
//           }catch(e){
//             return e.toString();
//           }
//       }
      
//     },

//     removeTodo: async(_, {id}, {user}) => {
//       if(!user){
//         throw new Error("Must be a authenticated user to remove a todo")
//       }
//       else{
//         try{
//           const response = client.query(
//             query.Delete(q.ref(query.Collection("todos"), id)
//           ));

//           return{
//               id : response.ref.id,
//               value: response.data.value,
//               completed: response.data.completed
//           }
//         }catch(e){
//           return e.toString();
//         }
//       }
//     }
//   }
// }

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({context})=>{
//     if (context.clientContext.user){
//       return(
//         {
//           user: context.clientContext.user.sub
//         }
//       )
//     }
//     else{
//       return {};
//     }
//   },
//   playground: true,
//   introspection: true
// })

// const handler = server.createHandler()

// export default { handler }
