import sequelize from '../DB';
import Sequelize from 'sequelize';

const MTodo = sequelize.define('todo', {
	title: Sequelize.STRING(255),
	description: Sequelize.STRING(1024),
	done: Sequelize.BOOLEAN,
});

export default MTodo;