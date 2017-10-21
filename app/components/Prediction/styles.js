import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	},
	image: {
		width,
		height: 300
	},
	listTitle: {
		fontWeight: 'bold'
	}
});

export default styles;