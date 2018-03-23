import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	RefreshControl,
} from 'react-native';
import ListItem from "../components/ListItem";
import films from "../resources/films.json";
import moment from 'moment';


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
		const { item } = this.props;
		const now = moment().format("HH:mm").replace(/:/g, "");
		const filteredItem = item.filter(i => (+(i.showtimes[0].startsAtTime).replace(/:/g, "") > +now))
		return (
			<FlatList
				data={filteredItem}
				renderItem={this.renderItem}
				keyExtractor={this.keyExtractor}
				ItemSeparatorComponent={this.renderSeparator}
				refreshControl={
					<RefreshControl
		            refreshing={this.props.refreshing}
		            onRefresh={this.props.onRefresh}
		          />
				}
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