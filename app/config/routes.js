import {StackNavigator} from 'react-navigation';
import MainScreenTab from '../containers/Main';
import DetailScreenTab from '../containers/Detail';
import styles from '../styles';

const Navigator = StackNavigator({
	Main: {screen: MainScreenTab},
	Detail: {screen: DetailScreenTab}
}, {
	navigationOptions: {
		headerStyle: styles.header,
		headerTitleStyle: styles.headerTitle
	}
});

export default Navigator;