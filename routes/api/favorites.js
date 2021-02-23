const express = require('express');
const router = express.Router();
const User = require('../../models/User');

// ******************** HTTP: GET ********************
// @route   GET api/favorites 1 favorite (by favId) for 1 user (by id)
// @desc    Get favs
// @access  Public
router.get('/users/:id', (req, res) => {
	User.findById(req.params.id).then(user => {
		Itinerary.find({ _id: { $in: user.favorites } }).then(itineraries =>
			res.json(itineraries)
		);
	});
});

// @route   PUT api/favorites for 1 user (by id)
// @desc    Add favs
// @access  Public
router.put('/:id', function (req, res) {
	try {
		User.updateOne(
			{ _id: req.params.id },
			{ $push: { favorites: [req.body.charId] } }
		).then(function () {
			res.send({ msg: 'push done' });
		});
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server error.');
	}
});

module.exports = router;
