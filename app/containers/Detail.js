import {TabNavigator} from 'react-navigation';
import Description from './Description';
import Shop from './Shop';
import Map from './Map';

const DetailScreenTab = TabNavigator({
	Description: {screen: Description},
	Shop: {screen: Shop},
	Map: {screen: Map},
}, {
	tabBarPosition: 'bottom'
});

export default DetailScreenTab;