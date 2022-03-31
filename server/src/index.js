const express = require('express');
const db = require('mysql');

const PORT = 3001;
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
