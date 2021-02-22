// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import Spinner from '../layout/Spinner';
// import ProfileItem from './ProfileItem';
// import { getFavorites } from '../../actions/favorites';

// const Favorites = ({
// 	getFavorites,
// 	favorite: { favorites, loading },
// 	match,
// }) => {
// 	// console.log('profiles payload into component', profiles);
// 	useEffect(() => {
// 		getFavorites(match.params.id);
// 	}, [getFavorites, match.params.id]);

// 	return (
// 		<>
// 			{loading ? (
// 				<Spinner />
// 			) : (
// 				<>
// 					<h1 className='large text-primary'>Favorite characters overview</h1>
// 					<p className='lead'>
// 						<i className='fab fa-connectdevelop' /> These are your favorite
// 						characters
// 					</p>
// 					<div className='profiles'>
// 						{profiles.length > 0 ? (
// 							profiles.map(profile => (
// 								<ProfileItem key={profile.id} profile={profile} />
// 							))
// 						) : (
// 							<h4>No profiles found...</h4>
// 						)}
// 					</div>
// 				</>
// 			)}
// 		</>
// 	);
// };

// Favorites.propTypes = {
// 	getFavorites: PropTypes.func.isRequired,
// 	favorite: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
// 	favorite: state.favorite,
// });

// export default connect(mapStateToProps, { getFavorites })(Favorites);
