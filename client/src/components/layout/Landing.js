import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Landing = ({ auth: { isAuthenticated } }) => {
	return (
		<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1 className='x-large'>Rick and Morty</h1>
					<p className='lead'>
						This application gives you access to all characters based on the
						television show Rick and Morty!
					</p>
					{!isAuthenticated ? (
						<div className='buttons'>
							<Link to='/register' className='btn btn-primary'>
								Sign Up
							</Link>
							<Link to='/login' className='btn btn-light'>
								Login
							</Link>
						</div>
					) : (
						<Link to='/profiles' className='btn btn-light'>
							Return to characters overview
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};

Landing.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
