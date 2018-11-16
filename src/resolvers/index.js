import Person from "./resolvers/Person";

export default {
	Query: {
		getPerson: Person.getPerson,
		getPersons: Person.getPersons,
	},
	Mutation: {
		createPerson: Person.createPerson,
		updatePerson: Person.updatePerson,
		deletePerson: Person.deletePerson,
	}
};