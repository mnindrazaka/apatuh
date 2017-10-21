const ObjectReducers = (state = {}, action) => {
	switch (action.type) {
		case 'CHANGE_PREDICTIONS':
			return {
				...state,
				predictions: action.predictions
			};
		case 'CHANGE_PHOTO':
			return {
				...state,
				photo: action.photo
			};
		default:
			return state;
	}
};

export default ObjectReducers;