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
	console.log(email, password);

	// Check Existing User
	User.findOne({ email })
		.then(user => {
			if(!user) return res.status(400).json({ msg: 'user does not exist'});

			// Validate password
			bcrypt.compare(password, user.password)
				.then(isMatch => {
					if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials'});

					jwt.sign(
						{ id: user.id },
						jwtSecret, 
						(err, token) => {
							if(err) throw err;
							res.json({
								token,
								user: {
									id: user.id,
									firstname: user.firstname,
									lastname: user.lastname,
									email: user.email
								}
							})
						}
					)
				})		
		}) 
})

// Get staffs data
router.get('/staffs', (req, res) => {
	User.find({})
		.select('-password')
		.then(staffs => {
			console.log(staffs);
			res.json({staffs})}
		);
})

// Update user details
router.post('/update', (req, res) => {
	const {email, firstname, lastname} = req.body;
	console.log(email, firstname, lastname);
	User.findOne({ email })
		.then(user => {
			user.firstname = firstname;
			user.lastname = lastname;

			user.save()
				.then(() => res.json({ msg: 'Details updated successfully'}));
		})
});

module.exports = router;