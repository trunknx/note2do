import {StackNavigator} from 'react-navigation';
import HomePage from '../pages/Home.page';
import ListTodoPage from '../pages/ListTodo.page';

const Router = StackNavigator({
	home: {
		screen: HomePage,
	},
	listTodo: {
		screen: ListTodoPage
	}
});

export default Router;
