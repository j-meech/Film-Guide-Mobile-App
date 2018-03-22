import React, { Component } from 'react';
import Detail from "../components/Detail";
import HeaderRightButton from "../components/HeaderRightButton";

class DetailScreen extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { item } = this.props.navigation.state.params;

		return (
			<Detail item={ item } />
		);
	}
}

DetailScreen.navigationOptions = ( { navigation } ) => ({
  title: navigation.state.params.item.name,
  headerRight: (
  	<HeaderRightButton url={navigation.state.params.item.imdbUrl} />
  	),
});

export default DetailScreen;