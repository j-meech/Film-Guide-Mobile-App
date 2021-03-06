import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import moment from 'moment';

class ShowTime extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		
		const {showtimes, numberOfLines, i} = this.props;
		const showing = showtimes[i].startsAtDate + " " + showtimes[i].startsAtTime;

		return (
				<Text style={styles.filmShowTime} numberOfLines={numberOfLines}>{ moment(showing).calendar() } on { showtimes[i].channel } </Text>
		);
	}
}

const styles = StyleSheet.create({
	filmShowTime: {
		fontSize: 15,
		color: '#878787',
		marginVertical: 3,
	},
});


export default ShowTime;


// render() {
// 		const showing = this.props.showDate + " " + this.props.showTime;

// 		return (
// 			<Text style={styles.filmShowTime} numberOfLines={this.props.numberOfLines}>{ moment(showing).calendar() } on { this.props.channel } </Text>
// 		);
// 	}