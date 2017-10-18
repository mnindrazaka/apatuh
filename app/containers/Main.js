import {TabNavigator} from 'react-navigation';
import Camera from './Camera';
import Saved from './Saved';
import styles from '../styles';

const MainScreenTab = TabNavigator({
	Camera: {screen: Camera},
	Saved: {screen: Saved}
}, {
	tabBarOptions: {
		showLabel: false,
		showIcon: true,
		iconStyle: {
			width: 35,
			height: 30
		},
		style: styles.tabBar,
		indicatorStyle: {
			backgroundColor: 'white'
		}
	},
	tabBarPosition: 'bottom'
});

export default MainScreenTab;