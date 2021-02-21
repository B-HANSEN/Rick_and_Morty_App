const express = require('express');
const request = require('request');
// const config = require('config');
const router = express.Router();
// const auth = require('../../middleware/auth');
const axios = require('axios');

// const Profile = require('../../models/Profile');

// @route   GET api/profiles
// @desc    Get all profiles
// @access  Public
router.get('/', async (req, res) => {
	console.log('reach start of API');

	// try {
	// 	const profiles = [];
	// 	const res = axios
	// 		.get('https://rickandmortyapi.com/api/character')
	// 		.then(({ data }) => {
	// 			profiles = data.map(profile => profile.results);
	// 		});
	// 	console.log('res', res);
	// 	// const profiles = await Profile.find().populate('user', ['name', 'avatar']);
	// 	// res.json(profiles);
	// } catch (err) {
	// 	console.error(err.message);
	// 	res.status(500).send('Server Error');
	// }

	// try {
	// 	const options = {
	// 		uri: 'https://rickandmortyapi.com/api/character',
	// 		method: 'GET',
	// 		headers: {
	// 			content-type: "application/json; charset=utf-8"
	// 		},
	// 	};
	// 	request(options, (error, response, body) => {
	// 		if (error) console.error(error);
	// 		if (response.statusCode !== 200) {
	// 			return res.status(404).json({ msg: 'Nothing found' });
	// 		}
	// 		// body is a regular string with escaped quotes etc, so apply JSON.parse()
	// 		await res.json(JSON.parse(body));
	// 		console.log(res)
	// 	});
	// } catch {
	// 	console.error(err.message);
	// 	res.status(500).send('Server Error');
	// }
});

// @route   GET api/profile/user/:user_id  // add colon for placeholder
// @desc    Get profile by user ID
// @access  Public
router.get('/user/:user_id', async (req, res) => {
	try {
		// const profile = await Profile.findOne({
		// 	user: req.params.user_id,
		// }).populate('user', ['name', 'avatar']);

		const profile = await Profile.findOne({ user: req.params.user_id });
		profile.populated('user', ['name', 'avatar']);
		await profile.populate('user').populate(['name', 'avatar']).execPopulate();

		// if profile not available
		if (!profile) return res.status(400).json({ msg: 'Profile not found.' });
		// if profile available
		res.json(profile);
	} catch (err) {
		console.error(err.message);
		// error object with name property; CastError is a certain kind of error
		if (err.name === 'CastError') {
			return res.status(400).json({ msg: 'Profile not found.' });
		}
		res.status(500).send('Server Error');
	}
});

// @route   DELETE api/profile
// @desc    Delete profile, user & posts
// @access  Private // i.e. access to the token
// router.delete('/', auth, async (req, res) => {
// 	try {
// 		// remove user's posts
// 		await Post.deleteMany({ user: req.user.id });
// 		// remove profile
// 		await Profile.findOneAndRemove({ user: req.user.id });
// 		// remove account
// 		await User.findOneAndRemove({ _id: req.user.id });

// 		res.json({ msg: 'User deleted.' });
// 	} catch (err) {
// 		console.error(err.message);
// 		res.status(500).send('Server Error');
// 	}
// });

module.exports = router;
