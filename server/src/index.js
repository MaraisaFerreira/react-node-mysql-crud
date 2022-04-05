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

	const sql = `INSERT INTO games (title, year, trademark, category, rating) VALUES (?,?,?,?,?)`;

	db.query(sql, [title, year, trademark, category, rating], (err, resp) => {
		console.log(err);
	});
});

app.post('/update', (req, res) => {
	const { id } = req.body;
	const { title } = req.body;
	const { year } = req.body;
	const { trademark } = req.body;
	const { category } = req.body;
	const { rating } = req.body;

	const sql =
		'UPDATE games SET title = ?, year = ?, trademark = ?, category = ?, rating = ? WHERE idgames = ?';

	db.query(
		sql,
		[title, year, trademark, category, rating, id],
		(err, result) => {
			if (err) {
				console.log(err);
			}
		}
	);
});

app.get('/getAllGames', (req, resp) => {
	const sql = 'SELECT * FROM games';

	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
			resp.status(500);
		} else {
			resp.send(result);
		}
	});
});

app.delete('/remove-game/:id', (req, res) => {
	const id = req.params.id;
	const sql = 'DELETE FROM games WHERE idgames = ?';

	db.query(sql, [id], (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Success');
		}
	});
});

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
