import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Camera extends Component {
	render() {
		return(
			<View>
				<Text>Camera Tab</Text>
				<Button
					title="goto detail"
					onPress={() => this.props.gotoDetail()} />
			</View>
		);
	}
}