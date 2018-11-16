import React, {Component} from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_PERSON = gql`
	query GET_PERSON($id: Int!){
		getPerson(id: $id) {
			name,
			dateofbirth
		}
	}
`;

class App extends Component {

	render() {
		return (
			<Query variables={{ id: 1337 }} query={GET_PERSON}>
				{({ loading, error, data }) => {
					if (loading) return <div>Loading...</div>;
					if (error) {
						console.log(error)
						return <div>Error :(</div>;
					}

					return (
						<>
							<h1>hello</h1>
						<pre>
							{JSON.stringify(data)}
						</pre>
						</>
					)
				}}
			</Query>
		);
	}
}

export default App

