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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lowdb__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lowdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lowdb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lowdb_adapters_FileSync__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lowdb_adapters_FileSync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lowdb_adapters_FileSync__);




class DB {
	constructor() {
		this.connect = () => {
			const adapter = new __WEBPACK_IMPORTED_MODULE_2_lowdb_adapters_FileSync___default.a('db.json');
			return __WEBPACK_IMPORTED_MODULE_1_lowdb___default()(adapter);
		};

		this.connectMongo = () => {
			const { DB_DIALECT, DB_PORT, DB_HOST, DB_NAME } = process.env;
			__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(`${DB_DIALECT}://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
		};
	}

}

/* harmony default export */ __webpack_exports__["a"] = (new DB().connect());

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getServerData__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_server_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_server_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connector_DB__ = __webpack_require__(1);
// load .env file into process.env global
__webpack_require__(4).config();




// init lowdb singleton


__WEBPACK_IMPORTED_MODULE_3__connector_DB__["a" /* default */].defaults({
	persons: [],
	count: 0
}).write();

const { resolvers, schema } = Object(__WEBPACK_IMPORTED_MODULE_0__getServerData__["a" /* default */])();
const server = new __WEBPACK_IMPORTED_MODULE_2_apollo_server_express__["ApolloServer"]({ typeDefs: schema, resolvers });

const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

// { type: 'Query', query: '{}{}DAS{D{A}' }
// /graphql
// dds
// /persons/getNamesFromPersons

app.get('/world', (req, res) => res.send('hi!!'));

server.applyMiddleware({ app });

const port = 4000;

app.listen({ port }, () => {
	console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_merge_graphql_schemas__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_merge_graphql_schemas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_merge_graphql_schemas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema_schema__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolvers_index__ = __webpack_require__(9);





/* harmony default export */ __webpack_exports__["a"] = (() => {
	// remove merged graphql schema for simplicity
	// const types = mergeTypes(fileLoader(`${path.resolve('./src/types')}/**/*.{graphql,gql}`));

	// this way is more convenient since we don't have to keep track of our /src/resolvers/index.js file but
	// it forces us to use the syntax supported by the current node version. because webpack doesn't transpile non-imported/required files.
	// const resolvers = mergeResolvers(allResolvers);
	return { schema: __WEBPACK_IMPORTED_MODULE_2__schema_schema__["a" /* default */], resolvers: __WEBPACK_IMPORTED_MODULE_3__resolvers_index__["a" /* default */] };
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("merge-graphql-schemas");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_server_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_server_express__);


const schema = __WEBPACK_IMPORTED_MODULE_0_apollo_server_express__["gql"]`
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

/* harmony default export */ __webpack_exports__["a"] = (schema);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resolvers_Person__ = __webpack_require__(10);


/* harmony default export */ __webpack_exports__["a"] = ({
	Query: {
		getPerson: __WEBPACK_IMPORTED_MODULE_0__resolvers_Person__["a" /* default */].getPerson,
		getPersons: __WEBPACK_IMPORTED_MODULE_0__resolvers_Person__["a" /* default */].getPersons
	},
	Mutation: {
		createPerson: __WEBPACK_IMPORTED_MODULE_0__resolvers_Person__["a" /* default */].createPerson,
		updatePerson: __WEBPACK_IMPORTED_MODULE_0__resolvers_Person__["a" /* default */].updatePerson,
		deletePerson: __WEBPACK_IMPORTED_MODULE_0__resolvers_Person__["a" /* default */].deletePerson
	}
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connector_DB__ = __webpack_require__(1);


class Person {
	constructor() {
		this.getPerson = (obj, { id }, context, info) => {
			return __WEBPACK_IMPORTED_MODULE_0__connector_DB__["a" /* default */].get('persons').filter({ id }).first().value();
		};

		this.getPersons = (obj, { id }, context, info) => {
			return __WEBPACK_IMPORTED_MODULE_0__connector_DB__["a" /* default */].get('persons').value();
		};

		this.createPerson = (obj, { name, dateofbirth }, context, info) => {
			const persons = __WEBPACK_IMPORTED_MODULE_0__connector_DB__["a" /* default */].get('persons').last().value();
			try {
				__WEBPACK_IMPORTED_MODULE_0__connector_DB__["a" /* default */].get('persons').push({ id: persons.id + 1, name, dateofbirth }).write();
			} catch (e) {
				return false;
			}
			return true;
		};

		this.updatePerson = (obj, { id, name, dateofbirth }, context, info) => {
			try {
				__WEBPACK_IMPORTED_MODULE_0__connector_DB__["a" /* default */].get('persons').find({ id }).assign({
					id,
					name,
					dateofbirth
				}).write();
			} catch (e) {
				return false;
			}
			return true;
		};

		this.deletePerson = (obj, { id }, context, info) => {
			try {
				__WEBPACK_IMPORTED_MODULE_0__connector_DB__["a" /* default */].get('persons').remove({ id }).write();
			} catch (e) {
				return false;
			}
			return true;
		};
	}

}

// export as singleton
/* harmony default export */ __webpack_exports__["a"] = (new Person());

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("lowdb");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("lowdb/adapters/FileSync");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map