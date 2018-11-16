// load .env file into process.env global
require('dotenv').config();
import getServerData from './getServerData';
import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';

// init lowdb singleton
import db from './connector/DB';

db.defaults({
	persons: [],
	count: 0
})
	.write();

const {resolvers, schema} = getServerData();
const server = new ApolloServer({typeDefs: schema, resolvers});

const app = express();

// { type: 'Query', query: '{}{}DAS{D{A}' }
// /graphql
// dds
// /persons/getNamesFromPersons

app.get('/world', (req,res) => res.send('hi!!'));

server.applyMiddleware({app});

const port = 4000;

app.listen({port}, () => {
		console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
	}
);