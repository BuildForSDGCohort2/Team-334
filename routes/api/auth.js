const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')

const { jwtSecret } = require('../../config/keys.js');

const User = require('../../models/User.js');


// Registering Providers
router.post('/', (req, res) => {
	const { email, password} = req.body;

	// Check Existing User
	User.findOne({ email })
		.then(user => {
			if(!user) return res.status(400).json({ msg: 'user does not exist'});

			// Validate password
			bcrypt.compare(password, user.password)
				.then(isMatch => {
					if(!isMatch) return res.status(400).json({ msg: 'Invalid credebtials'});

					jwt.sign(
						{ id: user.id },
						jwtSecret, 
						(err, token) => {
							if(err) throw err;
							res.json({
								token,
								user: {
									id: user.id,
									name: user.firstname + ' ' + user.lastname,
									email: user.email
								}
							})
						}
					)
				})		
	}) 
})

// Get user data
router.get('/user', (req, res) => {
	User.findById(req.user.id)
		.select('-password')
		.then(user => res.json(user));
})

module.exports = router;