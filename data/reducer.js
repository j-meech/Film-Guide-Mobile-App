
// need to change state.set() as not using immutable, use spread instead

const setFilms = (state, { films }) => {
	const newState = {
		...state,
		films: films,
	}
	return newState;
};

const reducer = (state, action) => {
    switch (action.type) {
    	case "setFilms": return setFilms(state, action);
        default: return state;
    }
}

export default reducer;