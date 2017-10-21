const CameraReducers = (state = 'object', action) => {
	switch (action.type) {
		case 'CHANGE_DETECTION_MODE':
			return action.mode;
		default:
			return state;
	}
};

export default CameraReducers;