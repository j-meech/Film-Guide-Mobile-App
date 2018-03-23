


const setFilms = (state, { films }) => {
	const newState = {
		...state,
		films: films,
	}
	return newState;
};

const refreshFilms = (state, { refreshing }) => {
	const newState = {
		...state,
		refreshing: refreshing,
	}
	return newState;
};

// const finishedRefresh = (state, { refreshing }) => {
// 	const newState = {
// 		...state,
// 		refreshing: refreshFilms,
// 	}
// 	return newState;
// };

const reducer = (state, action) => {
    switch (action.type) {
    	case "setFilms": return setFilms(state, action);
    	case "refreshFilms": return refreshFilms(state, action);
    	case "finishedRefresh": return refreshFilms(state, action);
        default: return state;
    }
}

export default reducer;