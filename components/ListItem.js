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
import Rating from "./Rating";

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
						<ShowTime showtimes={item.showtimes} numberOfLines={1} i={0}/>
					</View>	
					<View style={styles.ratingContainer}>
						{ isIOS ? 
							<Entypo name="chevron-right" size={25} color="#e4e4e4"/>
							: null
						}
						<Rating rating={item.tmdbRating}/>
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
		width: 240,
	},
	filmTitle: {
		fontSize: 18,
		marginTop: 4,
	},
	ratingContainer: {
		flex: 1,
		flexDirection: 'row-reverse',
	}
});


export default ListItem;
