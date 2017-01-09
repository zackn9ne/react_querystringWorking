import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

const About = () => <div><h1>about page header</h1></div>;
const Page = (props) =>
	<div><h1>{props.location.query.message || 'no mesage'}</h1></div>

class App extends React.Component {
	render(){
		return(
			<Router history={ hashHistory }>
				<Route path="/" component={Page}></Route>
				<Route path="/about" component={About}></Route>
			</Router>
			)
	}
}

export default App;