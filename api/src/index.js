//Requiring Express dependancy
const express = require('express');
//Creating an app object
const app = express();
//Create a port object that allows us to change the port number dynamically OR the port defaults to 4000
const port = process.env.PORT || 4000;
const { ApolloServer, gql} = require('apollo-server-express');

//Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

//Provide resolver functions for our schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    }
};

//Apollo Server setup
const server = new ApolloServer({ typeDefs, resolver });

//Apply the Apolla GraphQL middleware and set the path to /api
server.applyMiddleware({ app, path: '/api'})

//Using app object's get method to instruct our application to send "Hello World" when user accesses root "/"
app.get('/', (req, res) => res.send('Hello Web Server!!!'));

//Instructing app to run on localhost:4000
app.listen({ port }, () => 
    console.log(
        `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
    )
);