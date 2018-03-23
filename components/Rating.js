import React from 'react';
import {
	StyleSheet,
	Text,
} from 'react-native';

const Rating = ({ rating }) => {
  	
  	let ratingColour =  { color: '#71500f' };

  	if (rating > 59) {
  		ratingColour = { color: '#265819' };
  	}
  	if (rating < 40) {
  		ratingColour = { color: '#7e2310' };
  	}


    return (
    	 rating ? <Text style={[styles.ratingText, ratingColour ]}>{ rating }%</Text> : null
    );
}

const styles = StyleSheet.create({
	ratingText: {
		fontSize: 18,		
	},
});

export default Rating;




