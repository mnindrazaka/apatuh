import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import Camera from '../components/Camera';
import firebaseApp from '../config/firebase';
import uuid from 'uuid/v4';
import clarifaiApp from '../config/clarifai';
import Clarifai from 'clarifai';
import {
	changeDetectionMode,
	changePredictions,
	changePhoto
} from '../actions';

const mapDispatchToProps = (dispatch) => ({
	capturePhoto:  (camera, mode) => {
		let model = null;
		switch (mode) {
			case 'object':
				model = Clarifai.GENERAL_MODEL;
				break;
			case 'fashion':
				model = Clarifai.APPAREL_MODEL;
				break;
			case 'food':
				model = Clarifai.FOOD_MODEL;
				break;
		}
		const options = {};

		return camera.capture({metadata: options}).then(data => {
			dispatch(changePhoto(data.path));
			return firebaseApp.storage().ref('/' + uuid() + '.jpg').putFile(data.path);
		}).then(data => {
			return clarifaiApp.models.predict(model, data.downloadURL);
		}).then(data => {
			dispatch(changePredictions(data.outputs[0].data.concepts));
			dispatch(NavigationActions.navigate({routeName: 'Prediction'}));
		}).catch(err => console.log(err));
	},
	changeDetectionMode: (mode) => {
		dispatch(changeDetectionMode(mode));
	}
});

const mapStateToProps = (state) => {
	return {
		camera: state.camera,
		object: state.object
	};
};

export default connect(mapStateToProps, mapDispatchToProps) (Camera);