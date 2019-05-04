import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from '../components/Home/Home.component';

class HomePage extends Component {
	render () {
		console.log('check props ', this.props)
		return (
			<Home onGoListTodo={()=> this.props.navigation.navigate({routeName: 'listTodo', params: {navigatingFrom: 'home'}})}/>
		);
	}
}

HomePage.propTypes = {
};

const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
