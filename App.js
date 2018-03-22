import React from 'react';
import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import initial from "./data/initial";
import reducer from "./data/reducer";
import { Provider } from "react-redux";


StatusBar.setBarStyle('light-content');

const RootNavigator = StackNavigator({
  List: ListScreen,
  Detail: DetailScreen,
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#68aa63'
    },
    headerTintColor: '#fff'
  }
});

const store = createStore(reducer, initial, compose(applyMiddleware(thunk)));

const App = () => (
	<Provider store={store}>
		<RootNavigator />
	</Provider>
);

export default App;