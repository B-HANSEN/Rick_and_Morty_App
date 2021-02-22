import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import favorite from './favorite';

export default combineReducers({
	alert,
	auth,
	profile,
	favorite,
});
