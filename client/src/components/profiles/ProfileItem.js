import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

const ProfileItem = ({
	profile: { id, name, status, species, location, origin, image },
}) => {
	// const linkTarget = {
	// 	pathname: `/profile/${id}`,
	// 	key: uuidv4(), // we could use Math.random, but that's not guaranteed unique.
	// 	state: {
	// 		applied: true,
	// 	},
	// };
	return (
		<div className='profile bg-dark'>
			<div>
				<img src={image} alt='characterImage' width='100%' height='100%' />
			</div>
			<div className='right'>
				<div className='favourite'>
					<h2>{name}</h2>
					<p className='favourite-star'>
						<i className='fas fa-star' />
					</p>
				</div>

				<p className='my-1'>
					{status === 'unknown' && <i className='far fa-circle' />}
					{status === 'Alive' && <i className='fas fa-circle text-success' />}
					{status === 'Dead' && (
						<i className='fas fa-circle text-danger' />
					)}{' '}
					{status} - {species}
				</p>
				<p className='my-1'>
					<span className='item'>Last known location:</span>
					<br />
					{location.name}
				</p>
				<p className='my-1'>
					<span className='item'>First seen in:</span>
					<br />
					{origin.name}
				</p>
				{/* {/* <Link to={`/profile/${_id}`} className='btn btn-primary'> */}

				<Link
					to={`/profile/${id}`}
					// to={linkTarget}
					key={location.key}
					className='btn btn-primary'
				>
					View Character
				</Link>

				{/* <p>Please click on refresh!!</p> */}
			</div>
		</div>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileItem;
