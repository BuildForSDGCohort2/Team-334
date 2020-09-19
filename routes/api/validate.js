const express = require('express')
const router = express.Router();
const { sgKey } = require('../../config/keys');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(sgKey);
const { sender } = require('../../config/keys');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const { jwtSecret } = require('../../config/keys.js');

const Reg = require('../../models/Reg');

// Email validation route
router.post('/', (req, res) => {
	const { firstname, lastname, email, password, parent} = req.body.creds;

	const newReg = new Reg ({
		firstname,
		lastname,
		email,
		password,
		code: Math.floor(Math.random() * 100000)
	});

	newReg.save()
		.then(user => {
			console.log(user)

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
router.post('/validate', (req, res) => {
	const code = req.body.code;

	Reg.findOne({ code })
		.then(pending => {
			if (pending.code === code) {
				res.json({
					firstname: pending.firstname,
					lastname: pending.lastname,
					email: pending.email,
					password: pending.password
				});
			} else {
				res.json({ success: false})
			}
		})
});

module.exports = router;