const express = require('express');
const twilio = require('twilio');

// Initialize Token
const AccessToken = twilio.jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

// init app
const app = express();
const PORT = process.env.PORT || 5000;

// Parsing Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handling create room route
const {accountSid, authToken, apiKey, secret} = require('./config/keys');
const client = twilio(accountSid, authToken);

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




// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// 
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build',  'index.html'))
//     });
// }

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));