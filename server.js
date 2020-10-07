const express = require('express');
const mongoose = require('mongoose');
const twilio = require('twilio');

// init app
const app = express();

// Parsing Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Keys
const {accountSid, apiKey, authToken, secret, mongoURI} = require('./config/keys');

// Initialize Token
const AccessToken = twilio.jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const client = twilio(accountSid, authToken);

// Connect to mongodb
mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Mongodb Connected...'))
	.catch(err => console.log(err));

app.post('/video/token', (req, res) => {
	const uniqueName = req.body.roomName;
	const token = new AccessToken(accountSid, apiKey, secret);
	token.identity = req.body.userName;
	const videoGrant = new VideoGrant({ uniqueName });
	token.addGrant(videoGrant);

	client.video.rooms.create({ uniqueName })
		.then(room => {
			const jwt = token.toJwt();
			res.json({ jwt, room: room.uniqueName });
		}).catch(err => console.log(err))
});

app.post('/joinroom', (req, res) => {
	const { roomName, userName } = req.body;

	const token = new AccessToken(accountSid, apiKey, secret);
	token.identity = userName;
	const videoGrant = new VideoGrant({ userName });
	token.addGrant(videoGrant);

	const jwt = token.toJwt();
	res.json({ jwt });
});

app.use('/api/reg', require('./routes/api/reg'));
app.use('/api/user/auth', require('./routes/api/auth'));
app.use('/api/register', require('./routes/api/register'));

// Port
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build',  'index.html'))
    });
}

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));