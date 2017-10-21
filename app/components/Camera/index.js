import React, {Component} from 'react';
import {View, Text, Modal, Button, Image} from 'react-native';
import {Icon, List, ListItem, Left, Body, Right} from 'native-base';
import RNCamera from 'react-native-camera';
import styles from './styles';

export default class Camera extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalVisible: false
		}
	}

	static navigationOptions = {
		header: null,
	};

	render() {
		console.log(this.props);
		return(
			<View style={styles.container}>
				<RNCamera
					ref={(cam) => {
						this.camera = cam;
					}}
					style={styles.camera}
					aspect={RNCamera.constants.Aspect.fill}>

					<View style={styles.cameraTop}>
						<Text
							style={styles.cameraButton}
							onPress={() => this.setState({isModalVisible: true})}>
							{this.props.camera + ' detection'}
						</Text>
					</View>

					<View style={styles.cameraBottom}>
						<Text style={styles.capture} onPress={() => this.props.capturePhoto(this.camera, this.props.camera)}>
							<Icon name="camera" style={styles.captureIcon} />
						</Text>
					</View>

				</RNCamera>

				<Modal
					animationType="slide"
					visible={this.state.isModalVisible}
					onRequestClose={() => this.setState({isModalVisible: false})}>
					<View style={styles.modalTop}>
						<Text style={styles.modalTitle}>Select Detection Mode</Text>
						<List>
							<ListItem
								style={styles.listItem}
								onPress={() => {
									this.props.changeDetectionMode('object');
									this.setState({isModalVisible: false});
								}}
								avatar
								button>
								<Left>
									<Image style={styles.modalImage} source={require('../../images/general.png')} />
								</Left>
								<Body>
									<Text style={styles.textTitle}>Object Detection</Text>
									<Text note>Detect General Object</Text>
								</Body>
							</ListItem>

							<ListItem
								style={styles.listItem}
								onPress={() => {
									this.props.changeDetectionMode('fashion');
									this.setState({isModalVisible: false});
								}}
								avatar
								button>
								<Left>
									<Image style={styles.modalImage} source={require('../../images/fashion.png')} />
								</Left>
								<Body>
									<Text style={styles.textTitle}>Fashion Detection</Text>
									<Text note>Detect Fashion Related Object</Text>
								</Body>
							</ListItem>

							<ListItem
								style={styles.listItem}
								onPress={() => {
									this.props.changeDetectionMode('food');
									this.setState({isModalVisible: false});
								}}
								avatar
								button>
								<Left>
									<Image style={styles.modalImage} source={require('../../images/food.png')} />
								</Left>
								<Body>
									<Text style={styles.textTitle}>Food Detection</Text>
									<Text note>Detect Food Related Object</Text>
								</Body>
							</ListItem>

						</List>
					</View>
					<View style={styles.modalBottom}>
						<Button
							title="Cancel"
							onPress={() => this.setState({isModalVisible: false})}/>
					</View>
				</Modal>
			</View>
		);
	}
}