import {NavigationActions} from 'react-navigation';
import {connect}  from 'react-redux';
import Home from '../components/Home';

const mapDispatchToProps = (dispatch) => ({
	onButtonProfilePress: () => {
		dispatch(NavigationActions.navigate({ routeName: 'Profile' }))
	}
});

export default connect(null, mapDispatchToProps) (Home);