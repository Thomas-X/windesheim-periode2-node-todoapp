import mongoose from 'mongoose';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

class DB {
	connect = () => {
		const adapter = new FileSync('db.json');
		return lowdb(adapter)
	};

	connectMongo = () => {
		const {DB_DIALECT, DB_PORT, DB_HOST, DB_NAME} = process.env;
		mongoose.connect(`${DB_DIALECT}://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
	}
}

export default (
	new DB()
)
	.connect();