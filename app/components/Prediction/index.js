import React, {Component} from 'react';
import {Text, Image} from 'react-native';
import {Container, Content, List, ListItem, Body, Right, Icon} from 'native-base';

import styles from './styles';

export default class Prediction extends Component {

	static navigationOptions = {
		title: "PREDICTION"
	};

	renderRow(rowData) {
		console.log(this.props);
		return (
			<ListItem
				key={rowData.id}
				button
				onPress={() => alert(rowData.name)}>
				<Body>
				<Text>{rowData.name}</Text>
				</Body>
				<Right>
					<Text>{rowData.value.toFixed(2)}</Text>
				</Right>
			</ListItem>
		);
	}

	render() {
		return (
			<Container style={styles.container}>
				<Image source={{uri: this.props.object.photo}} style={styles.image} />
				<List>
					<ListItem>
						<Body>
							<Text style={styles.listTitle}>Predicted Concept</Text>
						</Body>
						<Right>
							<Text style={styles.listTitle}>Accurate</Text>
						</Right>
					</ListItem>
				</List>
				<Content>
					<List dataArray={this.props.object.predictions.slice(0, 10)} renderRow={(rowData) => this.renderRow(rowData)} />
				</Content>
			</Container>
		);
	}
}