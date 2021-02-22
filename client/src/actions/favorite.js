import {
	// GET_FAVORITES,
	FAVORITES_LOADING,
	ADD_FAVORITE,
	FAVORITES_ERROR,
} from './types';

import axios from 'axios';
import { loadUser } from './auth';

// retrieve favorites for specific user from database
// export const getFavorites = userId => dispatch => {
// 	dispatch(setFavoritesLoading());
// 	axios.get('/api/favorites/users/' + userId).then(res => {
// 		console.log(res.data);
// 		dispatch({
// 			type: GET_FAVORITES,
// 			payload: res.data,
// 		});
// 	});
// };

export const addToFavorites = (charId, id) => async dispatch => {
	debugger;
	// Request body for adding favs
	// const body = { charId: charId };
	try {
		dispatch(setFavoritesLoading());
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		// const body = JSON.stringify(charId);
		const body = { charId: charId };

		const res = await axios.put(`/api/favorites/like/${id}`, body, config);
		dispatch({
			type: ADD_FAVORITE,
			payload: res.data,
			// payload: charId,
		});
		dispatch(loadUser());
	} catch (err) {
		dispatch({
			type: FAVORITES_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status,
			},
		});
	}
};

// export const removeFromFavorites = (favId, id) => dispatch => {
// 	console.log(favId, id);
// 	dispatch(setFavoritesLoading());
// 	axios.delete('/api/favorites/users/' + id + '/' + favId).then(res => {
// 		dispatch({
// 			type: FAVORITE_COUNT,
// 			payload: favId,
// 		});
// 		dispatch(loadUser());
// 	});
// };

export const setFavoritesLoading = () => {
	return {
		type: FAVORITES_LOADING,
	};
};
