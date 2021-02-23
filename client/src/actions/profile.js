import axios from 'axios';
import { loadUser } from './auth';
// import { setAlert } from './alert';

import {
	GET_PROFILE,
	GET_PROFILES,
	PROFILE_ERROR,
	CLEAR_PROFILE,
} from './types';

// get all profiles
export const getProfiles = () => async dispatch => {
	dispatch({ type: CLEAR_PROFILE });
	try {
		const res = await axios.get('https://rickandmortyapi.com/api/character');
		dispatch({
			type: GET_PROFILES,
			payload: res.data.results,
		});
		// dispatch(loadUser()); // refresh loadUser() is irrelevant here
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status,
			},
		});
	}
};

// get profile by ID
export const getProfileById = id => async dispatch => {
	try {
		const res = await axios.get(
			`https://rickandmortyapi.com/api/character/${id}`
		);
		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});
		// dispatch(loadUser());
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status,
			},
		});
	}
};
