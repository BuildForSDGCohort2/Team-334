const express = require('express');
const mongoose = require('mongoose');
const twilio = require('twilio');

// init app
const app = express();

// Parsing Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Token
const AccessToken = twilio.jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

// handling create room route
const {accountSid, authToken, apiKey, secret, mongoURI} = require('./config/keys');
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
	client.video.rooms.create({uniqueName: req.body.roomName})
	.then(room => {
		let accessToken = new AccessToken(accountSid, apiKey, secret);

		accessToken.identity = 'Care Provider';

		let grant = new VideoGrant();
		grant.room = room.uniqueName;
		accessToken.addGrant(grant);

		var jwt = accessToken.toJwt();

		res.send({room, jwt});
	})
	.catch(err => console.log(err))
})

app.use('/api/user', require('./routes/api/users'));
app.use('/api/user/auth', require('./routes/api/auth'));

// Port
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build',  'index.html'))
    });
}

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));