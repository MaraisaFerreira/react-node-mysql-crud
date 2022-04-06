import { useState } from 'react';
import './App.css';

import GamesContainer from './components/GamesContainer';
import RegisterContainer from './components/RegisterContainer';

import axios from 'axios';

function App() {
	const [game, setGame] = useState({ rating: 1 });

	const handleNewGame = (ev) => {
		setGame((prevState) => ({
			...prevState,
			[ev.target.name]: ev.target.value,
		}));
	};

	const handleRating = (value) => {
		setGame((prevState) => ({
			...prevState,
			rating: value,
		}));
	};

	const handleRegister = () => {
		if (!game.gameTitle || !game.year || !game.tradeMark) {
			alert('Name, Year and Trademark must be filled!');
			return;
		}

		const url = 'http://localhost:3001/register';
		axios.post(url, {
			title: game.gameTitle,
			year: game.year,
			trademark: game.tradeMark,
			category: game.category || 'Undefined',
			rating: game.rating,
		});

		setGame((prev) => ({ ...prev }));
	};

	return (
		<div className='App-container'>
			<RegisterContainer
				handleNewGame={handleNewGame}
				handleRegister={handleRegister}
				handleRating={handleRating}
				game={game}
			/>
			<GamesContainer game={game} />
		</div>
	);
}

export default App;
