import axios from 'axios';
// import { setAlert } from './alert';
import {
	GET_PROFILE,
	GET_PROFILES,
	PROFILE_ERROR,
	CLEAR_PROFILE,
} from './types';

// get all profiles
export const getProfiles = () => async dispatch => {
	// clean-up prior getting all profiles
	dispatch({ type: CLEAR_PROFILE });
	try {
		// const res = await axios.get('/api/profile');
		const res = await axios.get('https://rickandmortyapi.com/api/character');

		dispatch({
			type: GET_PROFILES,
			payload: res.data.results,
		});
	} catch (err) {
		console.log('from actions error');
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
export const getProfileById = userId => async dispatch => {
	try {
		const res = await axios.get(`/api/profile/user/${userId}`);

		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});
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
