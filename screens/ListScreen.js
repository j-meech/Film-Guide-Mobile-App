import React, { Component } from 'react';
import List from "../components/List";
import { connect } from "react-redux";
import { getFilms, refreshFilmsApi } from "../data/api";



class ListScreen extends Component {
	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);	
		this._onRefresh = this._onRefresh.bind(this);
	}

	_onRefresh() {
		this.props.onRefresh();
		// this.setState({refreshing: true});
		// fetchData().then(() => {
		//   this.setState({refreshing: false});
		// });
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
				refreshing={this.props.refreshing}
				onRefresh={this._onRefresh}
			/>
		);
	}
}

ListScreen.navigationOptions = {
	title: 'Films on Freeview',
};

const mapStateToProps = state => {
    return {
        films: state.films,
        refreshing: state.refreshing,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(getFilms()),
        onRefresh: () => dispatch(refreshFilmsApi()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);

