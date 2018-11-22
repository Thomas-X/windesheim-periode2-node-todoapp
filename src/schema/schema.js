import { gql } from 'apollo-server-express';

const schema = gql`
	type Todo {
		id: ID!,
        createdAt: String!,
        updatedAt: String!,
		title: String!,
		description: String!,
		done: Boolean!,
	}
	
	type Query {
		getTodo(id: ID!): [Todo]!,
		getTodos: [Todo]!,
	}
	type Mutation {
		createTodo(title: String!, description: String!, done: Boolean!): Boolean!,
		updateTodo(id: ID!, title: String!, description: String!, done: Boolean!): Boolean!,
		deleteTodo(id: ID!): Boolean!,
	}
	
`;

export default schema;