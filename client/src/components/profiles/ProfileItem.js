import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
	profile: { id, name, status, species, location, origin, image },
}) => {
	return (
		<div className='profile bg-light'>
			<div>
				<img src={image} alt='' />
				<h2>{name}</h2>

				<p className='my-1'>
					{/* if alive: green icon, if dead: red icon */}
					{status} - {species}
				</p>
				<p className='my-1'>
					Last known location:
					<br />
					{location.name}
				</p>
				<p className='my-1'>
					First seen in:
					<br />
					{origin.name}
				</p>
				{/* {/* <Link to={`/profile/${_id}`} className='btn btn-primary'> */}
				<Link
					to={`/profiles/${id}`}
					className='btn btn-primary'
					// profile={profile}
				>
					{' '}
					View Character
				</Link>
			</div>
		</div>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileItem;
