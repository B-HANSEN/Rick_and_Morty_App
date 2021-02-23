const express = require('express');
const router = express.Router();

// @route   GET api/profile/user/:user_id  // add colon for placeholder
// @desc    Get profile by user ID
// @access  Public
// router.get('/user/:user_id', async (req, res) => {
// 	try {
// 		const profile = await Profile.findOne({ user: req.params.user_id });
// 		profile.populated('user', ['name', 'avatar']);
// 		await profile.populate('user').populate(['name', 'avatar']).execPopulate();

// 		// if profile not available
// 		if (!profile) return res.status(400).json({ msg: 'Profile not found.' });
// 		// if profile available
// 		res.json(profile);
// 	} catch (err) {
// 		console.error(err.message);
// 		// error object with name property; CastError is a certain kind of error
// 		if (err.name === 'CastError') {
// 			return res.status(400).json({ msg: 'Profile not found.' });
// 		}
// 		res.status(500).send('Server Error');
// 	}
// });

module.exports = router;
