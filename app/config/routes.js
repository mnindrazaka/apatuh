import {StackNavigator} from 'react-navigation';
import Camera from '../containers/Camera';
import Prediction from '../containers/Prediction';
import styles from '../styles';

const Navigator = StackNavigator({
	Camera: {screen: Camera},
	Prediction: {screen: Prediction}
}, {
	navigationOptions: {
		headerStyle: styles.header,
		headerTitleStyle: styles.headerTitle,
		headerBackTitleStyle: styles.headerBackTitle,
		headerTintColor: '#fff'
	}
});

export default Navigator;