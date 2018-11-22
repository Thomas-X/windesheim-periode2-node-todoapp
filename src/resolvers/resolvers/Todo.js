import MTodo from "../../connector/models/MTodo";

class Todo {

	getTodo = async (obj, {id}, context, info) => {
		try {
			return await MTodo.findAll({
				where: {
					id,
				}
			});
		} catch (e) {
			return [];
		}
	};

	getTodos = async (obj, args, context, info) => {
		try {
			return await MTodo.findAll();
		} catch (e) {
			return [];
		}
	};

	createTodo = async (obj, {title, description, done}, context, info) => {
		try {
			await MTodo.create({
				title,
				description,
				done
			})
		} catch (e) {
			return false;
		}
		return true;
	};

	updateTodo = async (obj, {id, title, description, done}, context, info) => {
		try {
			await MTodo.update({
				title,
				description,
				done,
			},
				{
					where: {
						id,
					}
				});
		} catch (e) {
			return false;
		}
		return true;

	};

	deleteTodo = async (obj, {id}, context, info) => {
		try {
			await MTodo.destroy({
				where: {
					id,
				}
			});
		} catch (e) {
			return false;
		}
		return true;
	}
}

export default new Todo();
