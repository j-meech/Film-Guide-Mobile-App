import React, { Component } from 'react';
import {
	
} from 'react-native';
import films from "../resources/films.json";
import List from "../components/List";



class ListScreen extends Component {
	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);	
	}

	onPress(item) {
		this.props.navigation.navigate("Detail", {
			item: item,
		});
	}

	render() {
		return (
			<List
				item={films}
				onPress={this.onPress}
			/>
		);
	}
}

ListScreen.navigationOptions = {
	title: 'Films on Freeview',
};


export default ListScreen;