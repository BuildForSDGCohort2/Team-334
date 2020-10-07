const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');
const { sgKey, sender, jwtSecret } = require('../../config/keys');
sgMail.setApiKey(sgKey);


const User = require('../../models/User');


// Registering Providers
router.post('/', (req, res) => {
	const { firstname, lastname, email, password } = req.body;
	console.log(firstname, lastname, email, password);

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

// Register Patient
router.post('/patient', (req, res) => {
	const { email, msg, _id } = req.body;
	console.log(email, msg, _id)

	User.findOne({ _id })
		.then(user => {
			user.patients.addToSet({ email, msg });

			const message = {
				to: user.email,
				from: sender,
				subject: 'New Patient',
				text: 'Patient',
				html: `<h3>FROM: ${email}</h3>
						<br><br>
						<p>${user.msg}</p>`
			}

			sgMail.send(message)
				.then(() => res.json({ emailSent: true}))
				.catch(error => console.log(error.message))

			res.json({ msg: "Booked Successfully"});
		})
});

router.post('/send', (req, res) => {
	const { email, answers } = req.body;
	console.log(email, answers);

	User.findOne({ email })
		.then(user => {
			console.log(user);
			const message = {
				to: user.email,
				from: sender,
				subject: "Questionnaire Answers",
				text: "Patients Responds",
				html: `<h3></h3>
						<br><br>
						<p>${answers}</p>`
			}

			sgMail.send(message)
				.then(() => res.json({ emailSent: true}))
				.catch(error => console.log(error.message))

			res.status(200).send({ msg: 'Message Delivered'});
		})
});

module.exports = router;