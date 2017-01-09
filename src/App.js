import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

const Page = (props) =>
	<div><h1>{props.location.query.message || 'no mesage'}</h1></div>

class App extends React.Component {
	render(){
		return(
			<Router history={ hashHistory }>
				<Route path="/" component={Page}></Route>
			</Router>
			)
	}
}

export default App;