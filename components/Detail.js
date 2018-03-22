import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image,
	ScrollView,
} from 'react-native';
import ShowTime from "../components/ShowTime";


class DetailScreen extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { item } = this.props;
		const source = {
			uri: `https://image.tmdb.org/t/p/original/${item.tmdbImageId}.jpg`
		}
		return (
			<View style={styles.filmDetailsContainer}>
				<ScrollView>
					<Image source={ source } style={styles.filmImage} />
					<View style={styles.filmReleaseRatingContainer}>
						<Text style={styles.filmDetailsText}>
							Released in {item.year}
						</Text>
						<Text style={styles.filmDetailsText}>
							Rating: {item.tmdbRating}%
						</Text>
					</View>
					<Text style={styles.filmDetailsText}>
						Showtimes:
					</Text>
					<ShowTime showtime={ item.showtimes[0].startsAtTime } channel={ item.showtimes[0].channel }/>
					<View style={styles.detailsDivider}></View>
					<Text style={styles.filmSynopsisText}>
						{item.synopsis}
					</Text>
				</ScrollView>
			</View>
		);
	}
}


DetailScreen.navigationOptions = ( { navigation } ) => ({
  title: navigation.state.params.item.name,
  headerRight: (
  	<HeaderRightButton url={navigation.state.params.item.imdbUrl} />
  	),
});

const styles = StyleSheet.create({
	filmDetailsContainer: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: '#fff',
	},
	filmImage: {
		height: 300,
		width:200,
		marginTop: 10,
		marginBottom: 10,
		alignSelf: 'center',
	},
	filmReleaseRatingContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	detailsDivider: {
		height: 1,
		backgroundColor: '#ddd',
		marginVertical: 10,
	},
	filmDetailsText: {
		fontSize: 18,
		marginVertical: 5,
	},
	filmSynopsisText: {
		fontSize: 15,
	},
});


export default DetailScreen;