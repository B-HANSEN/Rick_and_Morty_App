const express = require('express');
const router = express.Router();
const User = require('../../models/User');

// ******************** HTTP: GET ********************
// @route   GET api/favorites 1 favorite (by favId) for 1 user (by id)
// @desc    Get favs
// @access  Public
router.get('/:id', (req, res) => {
	try {
		User.findById(req.params.id).then(user => {
			User.find({ _id: { $in: user.favorites } }).then(favorites =>
				res.json(favorites)
			);
		});
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server error.');
	}
});

// @route   PUT api/favorites for 1 user (by id)
// @desc    Add favs
// @access  Public
router.put('/:id', function (req, res) {
	try {
		User.updateOne(
			{ _id: req.params.id },
			{ $push: { favorites: req.body.charName } }
		).then(function () {
			res.send({ msg: 'push done' });
		});
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server error.');
	}
});

// @route   DELETE api/favorites 1 favorite (by favId) for 1 user (by id)
// @desc    Delete favs
// @access  Public
// router.delete('/:id', async (req, res) => {
// 	try {
// 		debugger;
// 		User.updateOne(
// 			{ _id: req.params.id },
// 			{ $pull: { favorites: req.body.charId } }
// 		).then(function () {
// 			res.send({ msg: 'delete done' });
// 		});

// 		// const user = await User.findOne({ user: req.params.id });
// 		// debugger;
// 		// // get remove index
// 		// const removeIndex = user.favorites
// 		// 	.map(item => item.id)
// 		// 	.indexOf(req.params.charId);
// 		// debugger;
// 		// // splicing the favorite out & save it
// 		// user.favorites.splice(removeIndex, 1);
// 		// await user.save();
// 		// res.json(user);

// 		// const user = await User.findOne({ user: req.params.id });
// 		// user.favorites = user.favorites.filter(
// 		// 	fav => fav.id.toString() !== req.params.charId
// 		// );
// 		// await user.save();
// 		// return res.status(200).json(user);
// 	} catch (err) {
// 		debugger;
// 		console.error(err.message);
// 		res.status(500).send('Server Error.');
// 	}
// });

module.exports = router;
