import {StackNavigator} from 'react-navigation';
import Home from '../containers/Home';
import Profile from '../containers/Profile';

const Navigator = StackNavigator({
	Home: {screen: Home},
	Profile: {screen: Profile}
});

export default Navigator;