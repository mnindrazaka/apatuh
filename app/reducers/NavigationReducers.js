import {NavigationActions} from 'react-navigation';
import Navigator from '../config/routes';

// const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('Home'));
const initialState = Navigator.router.getStateForAction(NavigationActions.init());

// Navigation Reducers
const NavigationReducers = (state = initialState, action) => {
	const nextState = Navigator.router.getStateForAction(action, state);
	return nextState || state;
};

export default NavigationReducers;