import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import PropTypes from 'prop-types';

// Icon Usage

class Home extends Component {
	render() {
		return (
			<View>
				<Text>
					Hello worle
				</Text>
				<Button
					title="Go to list todo"
					onPress={this.props.onGoListTodo}
				/>
			</View>
		);
	}


}

Home.propTypes = {
	onGoListTodo: PropTypes.func,
};
export default Home;
