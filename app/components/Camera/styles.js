import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	camera: {
		flex: 1
	},
	cameraTop: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	cameraBottom: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	capture: {
		flex: 0,
		backgroundColor: 'white',
		borderRadius: 5,
		color: '#000',
		padding: 10,
		margin: 40
	},
	captureIcon: {
		color: '#000',
		fontSize: 35
	},
	cameraButton: {
		flex: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		borderRadius: 5,
		color: '#fff',
		padding: 10,
		margin: 40,
		fontSize: 14
	},
	cameraButtonIcon: {
		color: '#fff',
		fontSize: 15
	},
	modalTitle: {
		fontSize: 20,
		marginBottom: 15
	},
	modalTop: {
		flex: 1,
		paddingLeft: 15,
		paddingTop: 15,
		paddingRight: 15
	},
	modalBottom: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	modalImage: {
		width: 50,
		height: 50
	},
	textTitle: {
		fontSize: 15,
		marginBottom: 5,
		fontWeight: 'bold'
	},
	listItem: {
		marginBottom: 10
	}
});

export default styles;