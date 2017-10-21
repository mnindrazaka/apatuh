import {combineReducers} from 'redux';
import NavigationReducers from './NavigationReducers';
import CameraReducers from './CameraReducers';
import ObjectReducers from './ObjectReducers';

export default combineReducers({
	nav: NavigationReducers,
	camera: CameraReducers,
	object: ObjectReducers
});