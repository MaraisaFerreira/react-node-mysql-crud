import './styles/GameContainer.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import CardGame from './CardGame';

export default function () {
	const [listGame, setListGame] = useState([]);

	useEffect(() => {
		const url = 'http://localhost:3001/getAllGames';

		axios.get(url).then((resp) => {
			setListGame(resp.data);
		});
	}, []);

	return (
		<main className='game-container'>
			<h2>Available Games</h2>

			<div className='cards-container'>
				{listGame.map((item) => {
					return (
						<CardGame
							key={item.idgames}
							id={item.idgames}
							title={item.title}
							year={item.year}
							trademark={item.trademark}
							category={item.category}
							rating={item.rating}
						/>
					);
				})}
			</div>
		</main>
	);
}
