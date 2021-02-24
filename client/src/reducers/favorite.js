import {
	FAVORITES_LOADING,
	GET_FAVORITES,
	ADD_FAVORITE,
	REMOVE_FAVORITE,
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
		case GET_FAVORITES:
			return {
				...state,
				favorites: payload,
				loading: false,
			};
		case ADD_FAVORITE:
			return {
				...state,
				favorites: payload,
			};
		case REMOVE_FAVORITE:
			return {
				...state,
				favorites: state.favorites.filter(favorite => favorite._id !== payload),
				loading: false,
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
