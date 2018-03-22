import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	FlatList,
} from 'react-native';
import ListItem from "../components/ListItem";
import films from "../resources/films.json";


class ListScreen extends Component {
	constructor(props) {
		super(props);
		this.renderItem = this.renderItem.bind(this)
	}

	renderItem({item}) {
		return (
			<ListItem
				item={item}
				onPress={this.props.onPress}
			/>
		);
	}

	keyExtractor(item) {
	    return item.id; 
	}

	renderSeparator() {
    	const style = { height: 1, backgroundColor: '#ddd', marginLeft: 10 };
    	return <View style={style} />;
	}

	render() {
		return (
			<FlatList
				data={this.props.item}
				renderItem={this.renderItem}
				keyExtractor={this.keyExtractor}
				ItemSeparatorComponent={this.renderSeparator}
			/>
		);
	}
}

ListScreen.navigationOptions = {
	title: 'Films on Freeview',
};

const styles = StyleSheet.create({

});


export default ListScreen;