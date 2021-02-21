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
	console.log('reach start of action');
	try {
		console.log('reach start of action TRY');
		// const res = await axios.get('/api/profiles');
		const res = await axios.get('https://rickandmortyapi.com/api/character');
		console.log('res in actions', res);
		dispatch({
			type: GET_PROFILES,
			payload: res.data.results,
		});
	} catch (err) {
		console.log('from actions error, PROFILE_ERROR');
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
		// const res = await axios.get(`/api/profile/user/${userId}`);
		const res = await axios.get(
			`https://rickandmortyapi.com/api/character/${id}`
		);

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
