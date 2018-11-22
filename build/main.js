require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);


class DB {

	/*
 * TODO move this to a logical location
 * Since webpack moves all imports at the top of the file and there's no guarantee that dotenv will be run as first unless we init in the constructor of the DB class
 * */
	constructor() {
		this.connect = () => {
			const {
				DB_HOST,
				DB_DIALECT,
				DB_USERNAME,
				DB_PASSWORD,
				DB_PORT,
				DB_NAME
			} = process.env;
			const sequelize = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(DB_NAME, DB_USERNAME, DB_PASSWORD, {
				host: DB_HOST,
				dialect: DB_DIALECT,
				port: DB_PORT,
				pool: {
					max: 5,
					min: 0,
					acquire: 30000,
					idle: 10000
				},
				// http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
				operatorsAliases: false
			});
			return sequelize;
		};

		__webpack_require__(12).config();
	}

}

/* harmony default export */ __webpack_exports__["a"] = (new DB().connect());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DB__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sequelize__);



const MTodo = __WEBPACK_IMPORTED_MODULE_0__DB__["a" /* default */].define('todo', {
	title: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING(255),
	description: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING(1024),
	done: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.BOOLEAN
});

/* harmony default export */ __webpack_exports__["a"] = (MTodo);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getServerData__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_server_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_server_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connector_DB__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connector_models_MTodo__ = __webpack_require__(2);
// load .env file into process.env global





// init db singleton



(async () => {
	// Sync models to DB
	await __WEBPACK_IMPORTED_MODULE_4__connector_models_MTodo__["a" /* default */].sync();

	///////

	const { resolvers, schema } = Object(__WEBPACK_IMPORTED_MODULE_0__getServerData__["a" /* default */])();
	const server = new __WEBPACK_IMPORTED_MODULE_2_apollo_server_express__["ApolloServer"]({ typeDefs: schema, resolvers });

	const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();
	// app.get('/world', (req,res) => res.send('hi!!'));
	server.applyMiddleware({ app });

	const port = 4000;

	app.listen({ port }, () => {
		console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
	});
})();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_merge_graphql_schemas__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_merge_graphql_schemas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_merge_graphql_schemas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema_schema__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolvers_index__ = __webpack_require__(10);





/* harmony default export */ __webpack_exports__["a"] = (() => {
	// remove merged graphql schema for simplicity
	// const types = mergeTypes(fileLoader(`${path.resolve('./src/types')}/**/*.{graphql,gql}`));

	// this way is more convenient since we don't have to keep track of our /src/resolvers/index.js file but
	// it forces us to use the syntax supported by the current node version. because webpack doesn't transpile non-imported/required files.
	// const resolvers = mergeResolvers(allResolvers);
	return { schema: __WEBPACK_IMPORTED_MODULE_2__schema_schema__["a" /* default */], resolvers: __WEBPACK_IMPORTED_MODULE_3__resolvers_index__["a" /* default */] };
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("merge-graphql-schemas");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_server_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_server_express__);


const schema = __WEBPACK_IMPORTED_MODULE_0_apollo_server_express__["gql"]`
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

/* harmony default export */ __webpack_exports__["a"] = (schema);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resolvers_Todo__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = ({
	Query: {
		getTodo: __WEBPACK_IMPORTED_MODULE_0__resolvers_Todo__["a" /* default */].getTodo,
		getTodos: __WEBPACK_IMPORTED_MODULE_0__resolvers_Todo__["a" /* default */].getTodos
	},

	Mutation: {
		createTodo: __WEBPACK_IMPORTED_MODULE_0__resolvers_Todo__["a" /* default */].createTodo,
		updateTodo: __WEBPACK_IMPORTED_MODULE_0__resolvers_Todo__["a" /* default */].updateTodo,
		deleteTodo: __WEBPACK_IMPORTED_MODULE_0__resolvers_Todo__["a" /* default */].deleteTodo
	}
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connector_models_MTodo__ = __webpack_require__(2);


class Todo {
	constructor() {
		this.getTodo = async (obj, { id }, context, info) => {
			try {
				return await __WEBPACK_IMPORTED_MODULE_0__connector_models_MTodo__["a" /* default */].findAll({
					where: {
						id
					}
				});
			} catch (e) {
				return [];
			}
		};

		this.getTodos = async (obj, args, context, info) => {
			try {
				return await __WEBPACK_IMPORTED_MODULE_0__connector_models_MTodo__["a" /* default */].findAll();
			} catch (e) {
				return [];
			}
		};

		this.createTodo = async (obj, { title, description, done }, context, info) => {
			try {
				await __WEBPACK_IMPORTED_MODULE_0__connector_models_MTodo__["a" /* default */].create({
					title,
					description,
					done
				});
			} catch (e) {
				return false;
			}
			return true;
		};

		this.updateTodo = async (obj, { id, title, description, done }, context, info) => {
			try {
				await __WEBPACK_IMPORTED_MODULE_0__connector_models_MTodo__["a" /* default */].update({
					title,
					description,
					done
				}, {
					where: {
						id
					}
				});
			} catch (e) {
				return false;
			}
			return true;
		};

		this.deleteTodo = async (obj, { id }, context, info) => {
			try {
				await __WEBPACK_IMPORTED_MODULE_0__connector_models_MTodo__["a" /* default */].destroy({
					where: {
						id
					}
				});
			} catch (e) {
				return false;
			}
			return true;
		};
	}

}

/* harmony default export */ __webpack_exports__["a"] = (new Todo());

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map