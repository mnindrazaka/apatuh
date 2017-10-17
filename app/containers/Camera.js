import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import Camera from '../components/Camera';

const mapDispatchToProps = (dispatch) => ({
	gotoDetail: () => {
		dispatch(NavigationActions.navigate({routeName: 'Detail'}));
	}
});

export default connect(null, mapDispatchToProps) (Camera);