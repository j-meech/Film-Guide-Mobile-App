import axios from "axios";
import { setFilms, refreshFilmsAction, finishedRefresh } from "../data/actions";

export const getFilms = () => dispatch => {
    axios.get("https://filmsonfreeview.herokuapp.com/api/films").then(response => {
    	const films = response.data;
       	// dispatch the setFilms action, passing along the films array
        dispatch(setFilms(films));
    });
};

export const refreshFilmsApi = () => dispatch => {
	dispatch(refreshFilmsAction());

	const refresh = () => {
		axios.get("https://filmsonfreeview.herokuapp.com/api/films").then(response => {
	    	const films = response.data;
	        dispatch(setFilms(films));
		    dispatch(finishedRefresh());
	    });		
	}

	setTimeout(refresh, 2000);
};