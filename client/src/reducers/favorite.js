import {
	FAVORITES_LOADING,
	ADD_FAVORITE,
	FAVORITES_ERROR,
} from '../actions/types';

const initialState = {
	favorites: [],
	favorite: {},
	loading: false,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case FAVORITES_LOADING:
			return {
				...state,
				loading: true,
			};
		case ADD_FAVORITE:
			return {
				...state,
				favorites: payload,
			};

		case FAVORITES_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};
		default:
			return state;
	}
}
