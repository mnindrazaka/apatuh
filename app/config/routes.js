import {StackNavigator} from 'react-navigation';
import MainScreenTab from '../containers/Main';
import DetailScreenTab from '../containers/Detail';

const Navigator = StackNavigator({
	Main: {screen: MainScreenTab},
	Detail: {screen: DetailScreenTab}
});

export default Navigator;