import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'native-base';
import RNCamera from 'react-native-camera';
import styles from './styles';

export default class Camera extends Component {

	static navigationOptions = {
		title: 'Camera',
		tabBarIcon: <Icon name="photo-camera" style={{ color: 'white' }} />
	};

	render() {
		return(
			<View style={styles.container}>
				<RNCamera
					ref={(cam) => {
						this.camera = cam;
					}}
					style={styles.camera}
					aspect={RNCamera.constants.Aspect.fill}>

					<Text style={styles.capture} onPress={() => this.props.capturePhoto(this.camera)}>
						<Icon name="camera" />
					</Text>

					<Text style={styles.capture} onPress={() => this.props.capturePhoto(this.camera)}>
						<Icon name="settings" />
					</Text>

				</RNCamera>
			</View>
		);
	}
}