import {
	PROFILE_ERROR,
	CLEAR_PROFILE,
	GET_PROFILE,
	GET_PROFILES,
} from '../actions/types';

const initialState = {
	profile: null,
	profiles: [],
	loading: true,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_PROFILE:
			console.log('GET SINGLE CHARACTER reducer', payload);
			return {
				...state,
				// response sent back includes the whole profile, add to state:
				profile: payload,
				loading: false,
			};
		case GET_PROFILES:
			console.log('GET PROFILES reducer');
			return {
				...state,
				profiles: payload,
				loading: false,
			};
		case PROFILE_ERROR:
			return {
				...state,
				// object with message and status
				error: payload,
				loading: false,
			};
		case CLEAR_PROFILE:
			return {
				...state,
				profile: null,
				repos: [],
				loading: false,
			};
		default:
			return state;
	}
}
