import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Constants, WebBrowser } from 'expo';

class HeaderRightButton extends Component {
	constructor(props) {
		super(props);
		this.redirect = this.redirect.bind(this);
	}
	redirect() {
		const { url } = this.props;
		WebBrowser.openBrowserAsync(url);
	}

	render() {
	return (
	 	<TouchableOpacity style={styles.filmLink} onPress={this.redirect}>
			<FontAwesome name="imdb" size={30} color="#fff"/>
		</TouchableOpacity>
	);
	}
}

const styles = StyleSheet.create({
	filmLink: {
		marginRight: 20,
	}
});


export default HeaderRightButton;