import {fileLoader, mergeResolvers, mergeTypes} from "merge-graphql-schemas";
import * as path from "path";
import schema from './schema/schema';
import resolvers from './resolvers/index';


export default () => {
	// remove merged graphql schema for simplicity
	// const types = mergeTypes(fileLoader(`${path.resolve('./src/types')}/**/*.{graphql,gql}`));

	// this way is more convenient since we don't have to keep track of our /src/resolvers/index.js file but
	// it forces us to use the syntax supported by the current node version. because webpack doesn't transpile non-imported/required files.
	// const resolvers = mergeResolvers(allResolvers);
	return { schema, resolvers};

}