import React, { Component } from 'react';
import {
	
} from 'react-native';
import List from "../components/List";
import { connect } from "react-redux";

import { getFilms } from "../data/api";



class ListScreen extends Component {
	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);	
	}

	componentDidMount() {
        this.props.onLoad();
    }

	onPress(item) {
		this.props.navigation.navigate("Detail", {
			item: item,
		});
	}

	render() {
		return (
			<List
				item={this.props.films}
				onPress={this.onPress}
			/>
		);
	}
}

ListScreen.navigationOptions = {
	title: 'Films on Freeview',
};

const mapStateToProps = state => {
    return {
        films: state.films
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(getFilms()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);

