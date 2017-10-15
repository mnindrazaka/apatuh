import {combineReducers} from 'redux';
import NavigationReducers from './NavigationReducers';

export default combineReducers({
	nav: NavigationReducers
});