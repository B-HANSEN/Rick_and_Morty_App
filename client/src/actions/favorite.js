import { FAVORITES_LOADING, ADD_FAVORITE, FAVORITES_ERROR } from './types';

import axios from 'axios';
import { loadUser } from './auth';
import { setAlert } from './alert';

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

export const setFavoritesLoading = () => {
	return {
		type: FAVORITES_LOADING,
	};
};
