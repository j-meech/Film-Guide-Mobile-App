export const setFilms = films => {
    return {
        type: "setFilms",
        films: films,
    };
};

export const refreshFilmsAction = () => {
	return {
		type: "refreshFilms",
        refreshing: true,
	}
};

export const finishedRefresh = () => {
	return {
		type: "finishedRefresh",
        refreshing: false,
	}
};