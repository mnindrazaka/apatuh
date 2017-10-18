import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'native-base';
import styles from '../../styles';

export default class Saved extends Component {

	static navigationOptions = {
		title: 'Saved Object',
		tabBarIcon: <Icon name="save" style={styles.tabBarIcon} />,
	};

	render() {
		return(
			<View>
				<Text>Saved Tab</Text>
			</View>
		);
	}
}