import db from '../../connector/DB';

class Person {

	getPerson = (obj, {id}, context, info) => {
		return db.get('persons')
			.filter({id})
			.first()
			.value();
	};

	getPersons = (obj, {id}, context, info) => {
		return db.get('persons')
			.value()
	};

	createPerson = (obj, {name, dateofbirth}, context, info) => {
		const persons = db.get('persons')
			.last()
			.value();
		try {
			db.get('persons')
				.push({id: persons.id + 1, name, dateofbirth})
				.write();
		} catch (e) {
			return false;
		}
		return true;
	};

	updatePerson = (obj, {id, name, dateofbirth}, context, info) => {
		try {
			db.get('persons')
				.find({id})
				.assign({
					id,
					name,
					dateofbirth
				})
				.write()
		} catch (e) {
			return false;
		}
		return true;
	};

	deletePerson = (obj, {id}, context, info) => {
		try {
			db.get('persons')
				.remove({id})
				.write();
		} catch (e) {
			return false;
		}
		return true;
	}
}

// export as singleton
export default new Person();