import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomePage from './pages/Home.page';
import ListTodo from './pages/ListTodo.page';

const MainNavigator = createStackNavigator({
	home: {screen: HomePage},
	listTodo: {screen: ListTodo},
});

const App = createAppContainer(MainNavigator);

export default App;
