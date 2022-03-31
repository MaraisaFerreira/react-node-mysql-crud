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

app.post('/register', (req, res) => {
	const { title } = req.body;
	const { year } = req.body;
	const { trademark } = req.body;
	const { category } = req.body;
	const { rating } = req.body;
});

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
