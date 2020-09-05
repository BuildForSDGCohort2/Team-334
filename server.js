const express = require('express');

// init app
const app = express()
const PORT = process.env.PORT || 4000;

// Parsing Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build',  'index.html'))
    });
}

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));