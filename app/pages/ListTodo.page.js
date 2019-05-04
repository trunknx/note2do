import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListTodo from '../components/ListTodo/ListTodo.component';

class ListTodoPage extends Component {
	render () {
		return (
			<ListTodo/>
		);
	}
}

const mapStateToProps = (state) => {};


export default connect(mapStateToProps, {})(ListTodoPage);
