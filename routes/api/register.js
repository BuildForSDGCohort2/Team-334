const express = require('express');
const router = express.Router();
const { sgKey, sender } = require('../../config/keys');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(sgKey);
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const { jwtSecret } = require('../../config/keys.js');

const Val = require('../../models/Validate');

// Email validation route
router.post('/', (req, res) => {
	const { firstname, lastname, email, password, guardian } = req.body;
	console.log(firstname, lastname, email, password, guardian);

	const valUser = new Val ({
		firstname,
		lastname,
		email,
		password,
		guardian,
		code: Math.floor(Math.random() * 100000)
	});

	valUser.save()
		.then(user => {
			console.log(user);

			const message = {
				to: user.email,
				from: sender,
				subject: 'Email verification',
				text: 'Five digits code',
				html: `<h3>Your verification code below</h3>
						<br><br>
						<h1>${user.code}</h1>`
			}

			sgMail.send(message)
				.then(() => res.json({ emailSent: true}))
				.catch(error => console.log(error.message))

		}).catch(err => console.log(err))

});

// Validating Entered Code
router.post('/verify', (req, res) => {
	const { code } = req.body;
	code.replace(' ', '');
	console.log(code);

	Val.findOne({ code })
		.then(pending => {
			console.log(pending);
			if (pending.code === code) {
				res.json({
					firstname: pending.firstname,
					lastname: pending.lastname,
					email: pending.email,
					password: pending.password,
					guardian: pending.guardian
				});
			}
		}).catch(err => {
			console.log(err);
			res.json({ msg: 'Failed to verify'})
		})
});

module.exports = router;