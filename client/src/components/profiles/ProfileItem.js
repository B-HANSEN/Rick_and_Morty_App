import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
	profile: { id, name, status, species, location, origin, image },
	auth: { user },
}) => {
	return (
		<div className='profile bg-dark'>
			<div>
				<img src={image} alt='characterImage' width='100%' height='100%' />
			</div>
			<div className='right'>
				<div className='favourite'>
					<h2>{name}</h2>
					<p className='favourite-star'>
						{user?.favorites.includes(name) ? (
							<i className='fas fa-star' />
						) : (
							<i className='far fa-star' />
						)}
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
				{/* <p>Please click on refresh!!</p> */}
				<div className='character-link'>
					<Link
						to={`/profiles/${id}`}
						key={location.key}
						className='btn btn-primary'
					>
						View Character
					</Link>
				</div>
			</div>
		</div>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
};

export default ProfileItem;
