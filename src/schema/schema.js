import { gql } from 'apollo-server-express';

const schema = gql`
	type Person {
		id: Int!,
		name: String!,
		dateofbirth: String!
	}
	
	type Query {
		getPerson(id: Int!): Person,
		getPersons: [Person],
	}
	
	type Mutation {
		createPerson(name: String!, dateofbirth: String!): Boolean!,
		updatePerson(id: Int!, name: String, dateofbirth: String): Boolean!,
		deletePerson(id: Int!): Boolean!,
	}
`;

export default schema;