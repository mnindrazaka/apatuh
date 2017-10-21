import {connect} from 'react-redux';
import Prediction from '../components/Prediction';

const mapStateToProps = (state) => {
	return {
		object: state.object
	};
};

export default connect(mapStateToProps) (Prediction);