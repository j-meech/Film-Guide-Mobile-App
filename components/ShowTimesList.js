import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import moment from 'moment';
import ShowTime from "./ShowTime";

class ShowTimesList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		
		const {showtimes, numberOfLines} = this.props;

		return (
				showtimes.reverse().map((showtime, index) => 
				<ShowTime 	
					key={index} 
					i={index}
					showtimes={showtimes}
					numberOfLines={numberOfLines} />
				)
		);
	}
}

// const styles = StyleSheet.create({
// 	filmShowTime: {
// 		fontSize: 15,
// 		color: '#878787',
// 		marginVertical: 3,
// 	},
// });


export default ShowTimesList;


// render() {
// 		const showing = this.props.showDate + " " + this.props.showTime;

// 		return (
// 			<Text style={styles.filmShowTime} numberOfLines={this.props.numberOfLines}>{ moment(showing).calendar() } on { this.props.channel } </Text>
// 		);
// 	}