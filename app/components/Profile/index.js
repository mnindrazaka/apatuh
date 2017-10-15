import React, {Component} from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';

export default class Profile extends Component {
	render() {
		return (
			<View>
				<Text>Ini Halaman Profile</Text>
				<Button
					title="Home"
					onPress={() => this.props.onHomeButtonPress()}/>
			</View>
		);
	}
}