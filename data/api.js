import axios from "axios";
import { setFilms } from "../data/actions";

export const getFilms = () => dispatch => {
    axios.get("https://filmsonfreeview.herokuapp.com/api/films").then(response => {
    	const films = response.data;
       	// dispatch the setFilms action, passing along the films array
        dispatch(setFilms(films));
    });
};