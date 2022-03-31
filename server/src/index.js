require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

app.get('/', (req, res) => {

	res.status(200);
});

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
