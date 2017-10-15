import React, {Component} from 'react';
import Navigator from './config/routes';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';

class App extends Component {
	render() {
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