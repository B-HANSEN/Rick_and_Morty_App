import {
	GET_FAVORITES,
	FAVORITES_LOADING,
	ADD_FAVORITE,
	// REMOVE_FAVORITE,
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
		case GET_FAVORITES:
			return {
				...state,
				favorites: action.payload,
				loading: false,
			};

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
		// case REMOVE_FAVORITE:
		// 	return {
		// 		...state,
		// 		favorites: state.favorites.filter(
		// 			favorite => favorite.id !== action.payload
		// 		),
		// 	};
		case FAVORITES_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};
		// case FAVORITE_COUNT:
		// 	console.log(action.payload);
		// 	return {
		// 		...state,
		// 		favorites: state.favorites.filter(fav => fav._id !== action.payload),
		// 		loading: false,
		// 	};
		default:
			return state;
	}
}
