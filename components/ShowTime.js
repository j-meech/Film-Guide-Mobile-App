import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
} from 'react-native';

class ShowTime extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Text style={styles.filmShowTime}>{ this.props.showtime } on { this.props.channel }</Text>
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


// import React from 'react';

// import {
//   Text,
// } from 'react-native';

// const ShowTime = (props) => {
//   render() {
//     return (
//       <Text style={styles.filmShowTime}>{ this.props.showtime } on { this.props.channel }</Text>
//     );
//   }
// }

// const styles = StyleSheet.create({
// 		filmShowTime: {
// 		fontSize: 12,
// 		color: '#ccc',
// 	},
// });

// export default ShowTime;