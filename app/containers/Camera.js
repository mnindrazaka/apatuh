import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import Camera from '../components/Camera';
import firebaseApp from '../config/firebase';
import uuid from 'uuid/v4';
import clarifaiApp from '../config/clarifai';
import Clarifai from 'clarifai';

const mapDispatchToProps = (dispatch) => ({
	capturePhoto: (camera) => {
		const options = {};
		camera.capture({metadata: options}).then(data => {
			return firebaseApp.storage().ref('/' + uuid() + '.jpg').putFile(data.path);
		}).then(data => {
			return clarifaiApp.models.predict(Clarifai.DEMOGRAPHICS_MODEL, data.downloadURL);
		}).then(data => {
			console.log(data.outputs);
		}).catch(err => console.log(err));

		// dispatch(NavigationActions.navigate({routeName: 'Detail'}));
	}
});

export default connect(null, mapDispatchToProps) (Camera);