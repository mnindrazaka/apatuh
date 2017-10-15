import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import Profile from '../components/Profile';

const mapDispatchToProps = (dispatch) => ({
	onHomeButtonPress: () => {
		dispatch(NavigationActions.navigate({routeName: 'Home'}))
	}
});

export default connect(null, mapDispatchToProps) (Profile);