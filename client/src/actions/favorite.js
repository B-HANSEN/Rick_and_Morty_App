import {
	FAVORITES_LOADING,
	GET_FAVORITES,
	ADD_FAVORITE,
	// REMOVE_FAVORITE,
	FAVORITES_ERROR,
} from './types';

import axios from 'axios';
import { loadUser } from './auth';
import { setAlert } from './alert';

export const getFavorites = id => async dispatch => {
	try {
		dispatch(setFavoritesLoading());
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const res = await axios.put(`/api/favorites/${id}`, config);

		dispatch({
			type: GET_FAVORITES,
			payload: res.data,
		});
		// dispatch(loadUser());
	} catch (err) {
		dispatch({
			type: FAVORITES_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status,
			},
		});
		dispatch(setAlert('Character could not be added.', 'danger'));
	}
};

export const addToFavorites = (charId, charName, id) => async dispatch => {
	try {
		dispatch(setFavoritesLoading());
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const body = {
			charId: charId,
			charName: charName,
		};
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
		dispatch(setAlert('Character could not be added.', 'danger'));
	}
};

// export const removeFromFavorites = (charId, id) => async dispatch => {
// 	try {
// 		dispatch(setFavoritesLoading());
// 		const config = {
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		};
// 		const body = { charId: charId };
// 		await axios.delete(`/api/favorites/${id}`, body, config);
// 		dispatch({
// 			type: REMOVE_FAVORITE,
// 			payload: charId,
// 		});
// 		dispatch(loadUser());
// 		dispatch(setAlert('Character was removed as favorite.', 'success'));
// 	} catch (err) {
// 		dispatch({
// 			type: FAVORITES_ERROR,
// 		});
// 		dispatch(setAlert('Character could not be removed.', 'danger'));
// 	}
// };

export const setFavoritesLoading = () => {
	return {
		type: FAVORITES_LOADING,
	};
};
