import {connect} from 'react-redux';
import Prediction from '../components/Prediction';

const mapStateToProps = (state) => {
	return {
		camera: state.camera,
		object: state.object
	};
};

export default connect(mapStateToProps) (Prediction);