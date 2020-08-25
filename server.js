const express = require('express');

// Init
const app = express();
const PORT = process.env.PORT || 5000;

// Parsing Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => console.log(`Server started at port ${PORT}`));