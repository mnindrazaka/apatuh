export const changeDetectionMode = (mode) => {
	return {
		type: 'CHANGE_DETECTION_MODE',
		mode
	};
};

export const changePredictions = (predictions) => {
	return {
		type: 'CHANGE_PREDICTIONS',
		predictions
	};
};

export const changePhoto = (photo) => {
	return {
		type: 'CHANGE_PHOTO',
		photo
	};
};