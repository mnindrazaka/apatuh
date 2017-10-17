import {TabNavigator} from 'react-navigation';
import Camera from './Camera';
import Saved from './Saved';

const MainScreenTab = TabNavigator({
	Camera: {screen: Camera},
	Saved: {screen: Saved}
}, {
	tabBarPosition: 'bottom'
});

export default MainScreenTab;