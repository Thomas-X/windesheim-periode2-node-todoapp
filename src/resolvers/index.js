import Todo from './resolvers/Todo';

export default {
	Query: {
		getTodo: Todo.getTodo,
		getTodos: Todo.getTodos,
	},

	Mutation: {
		createTodo: Todo.createTodo,
		updateTodo: Todo.updateTodo,
		deleteTodo: Todo.deleteTodo,
	}
};