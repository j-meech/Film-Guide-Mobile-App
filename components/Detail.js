import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image,
	ScrollView,
} from 'react-native';
import ShowTimesList from "./ShowTimesList";
import Rating from "./Rating";



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
			<ScrollView style={styles.scrollView}>
				<View style={styles.filmDetailsContainer}>
					{ item.tmdbImageId ?
						<Image source={ source } style={styles.filmImage} />
						: null
					}
					<View style={styles.filmReleaseRatingContainer}>
						{ item.year ?
							<Text style={styles.filmDetailsText}>
								Released in {item.year}
							</Text>
							: null
						}
						{ item.tmdbRating ? 
							<Text style={styles.filmDetailsText}>
								Rating: <Rating rating={item.tmdbRating}/>
							</Text>
							: null
						}
					</View>
					<Text style={styles.filmDetailsText}>
						Showtimes:
					</Text>
					<ShowTimesList showtimes={item.showtimes} />
					<View style={styles.detailsDivider}></View>
					<Text style={styles.filmSynopsisText}>
						{item.synopsis}
					</Text>
				</View>
			</ScrollView>
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
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: '#fff',
	},
	filmImage: {
		height: 300,
		width:200,
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