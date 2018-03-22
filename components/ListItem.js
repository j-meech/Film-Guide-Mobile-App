import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Platform } from 'react-native';
import ShowTime from "../components/ShowTime";

const isIOS = Platform.OS === 'ios';

class ListItem extends Component {
	
	constructor(props) {
	  super(props);
	  this.onPress = this.onPress.bind(this);
	}

	onPress() {
		const { item, onPress } = this.props;
		onPress(item);
	}

	render() {		
		const { item } = this.props;

		return (
			<TouchableHighlight 
				style={styles.listItem} 
				underlayColor="#e4e4e4"
				onPress={this.onPress}>
				<View style={styles.container}>					
					<View style={styles.listItemText}>
						<Text style={styles.filmTitle} numberOfLines={1}>{ item.name }</Text>
						<ShowTime showtime={ item.showtimes[0].startsAtTime } channel={ item.showtimes[0].channel }/>
					</View>	
					<View style={styles.ratingContainer}>
						<Text>{item.tmdbRating}%</Text>
					</View>
				</View>	
			
				
		   </TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	listItem: {
		flexDirection: 'row',
		height: 60,
		backgroundColor: '#fff',
		padding: 10,
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	listItemText: {
		flexDirection: 'column',
	},
	filmTitle: {
		fontSize: 18,
		marginTop: 4,
	},
	// filmShowTime: {
	// 	fontSize: 12,
	// 	color: '#ccc',
	// },
	ratingContainer: {
		flex: 1,
		flexDirection: 'row-reverse',
	}
});


export default ListItem;

//<Text style={styles.filmShowTime}>{ item.showtimes[0].startsAtTime + " on " + item.showtimes[0].channel }</Text>