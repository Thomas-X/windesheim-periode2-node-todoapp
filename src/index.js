// load .env file into process.env global
import getServerData from './getServerData';
import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import DB from './connector/DB';

// init db singleton
import sequelize from './connector/DB';
import MTodo from "./connector/models/MTodo";

(async() => {
	// Sync models to DB
	await MTodo.sync();


	///////

	const {resolvers, schema} = getServerData();
	const server = new ApolloServer({typeDefs: schema, resolvers});

	const app = express();
	// app.get('/world', (req,res) => res.send('hi!!'));
	server.applyMiddleware({app});

	const port = 4000;

	app.listen({port}, () => {
			console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
		}
	);
})();