import {
	GET_FAVORITES,
	FAVORITES_LOADING,
	ADD_FAVORITE,
	REMOVE_FAVORITE,
	FAVORITES_ERROR,
} from './types';

import axios from 'axios';
import { loadUser } from './auth';
import { setAlert } from './alert';

// retrieve favorites for specific user from database
export const getFavorites = userId => dispatch => {
	dispatch(setFavoritesLoading());
	const res = axios.get(`/api/favorites/users/${userId}`);

	dispatch({
		type: GET_FAVORITES,
		payload: res.data,
	});
};

export const addToFavorites = (charId, id) => async dispatch => {
	try {
		dispatch(setFavoritesLoading());
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const body = { charId: charId };
		const res = await axios.put(`/api/favorites/${id}`, body, config);

		dispatch({
			type: ADD_FAVORITE,
			payload: res.data,
		});
		dispatch(loadUser());
		dispatch(setAlert('Character was marked as favorite.', 'success'));
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

export const removeFromFavorites = (userId, favId) => async dispatch => {
	try {
		dispatch(setFavoritesLoading());
		// const config = {
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// };
		// const body = { charId: charId };
		// const res = await axios.delete(`/api/favorites/${id}`, body, config);
		await axios.delete(`/api/favorites/${userId}/${favId}`);

		dispatch({
			type: REMOVE_FAVORITE,
			payload: favId,
		});
		dispatch(loadUser());
		dispatch(setAlert('Character was removed as favorite.', 'success'));
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

export const setFavoritesLoading = () => {
	return {
		type: FAVORITES_LOADING,
	};
};
