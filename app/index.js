import React, {Component} from 'react';
import Navigator from './config/routes';
import {addNavigationHelpers, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';

class App extends Component {

	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', () => {
			if(this.props.nav.index === 0) {
				return false;
			}
			this.props.dispatch(NavigationActions.back());
			return true;
		});
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', () => {
			if(this.props.nav.index === 0) {
				return false;
			}
			this.props.dispatch(NavigationActions.back());
			return true;
		});
	}

	render() {
		// console.log(this.props);
		return(
			<Navigator navigation={addNavigationHelpers({
				dispatch: this.props.dispatch,
				state: this.props.nav
			})}/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		nav: state.nav
	};
};

export default connect(mapStateToProps) (App);