const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../../config/keys.js');

const User = require('../../models/User.js');


// Registering Providers
router.post('/', (req, res) => {
	const { firstname, lastname, email, password} = req.body;

	// Check Existing User
	User.findOne({ email })
		.then(user => {
			if(user) return res.status(400).json({ msg: 'user already exists'});

			const newUser = new User ({
				firstname,
				lastname,
				email,
				password
			});

			// Create Salt & Hash
			bcrypt.genSalt(10, (err, salt) => {
				if (err) throw err;
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					newUser.password = hash;
					newUser.save()
						.then(user => {

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
						.catch(err => console.log(err));
				})
			})
		}) 
})

module.exports = router;