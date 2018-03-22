
// need to change state.set() as not using immutable, use spred instead

const setFilms = (state, { films }) => state.set("films", films);

const reducer = (state, action) => {
    switch (action.type) {
    	case "setFilms": return setFilms(state, action);
        default: return state;
    }
}

export default reducer;