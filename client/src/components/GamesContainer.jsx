import './styles/GameContainer.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import CardGame from './CardGame';
import Modal from './Modal';

import { HiArrowNarrowLeft } from 'react-icons/hi';

export default function () {
	const [listGame, setListGame] = useState([]);
	const [modalContent, setModalContent] = useState({});
	const [modalVisibility, setModalVisibility] = useState(false);

	useEffect(() => {
		const url = 'http://localhost:3001/getAllGames';

		axios.get(url).then((resp) => {
			setListGame(resp.data);
		});
	}, []);

	const handleClick = (id, title, year, trademark, category, rating) => {
		setModalContent({
			id,
			title,
			year,
			trademark,
			category,
			rating,
		});
		setModalVisibility(true);
	};

	return (
		<main className='game-container'>
			<h2>Available Games</h2>

			{listGame.length < 1 && (
				<div className='no-games'>
					<h4>Sorry! Has no games on your database yet.</h4>
					<h5>Register one at side</h5>
					<HiArrowNarrowLeft className='left-arrow' />
				</div>
			)}
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
							click={handleClick}
						/>
					);
				})}
			</div>

			{modalVisibility && (
				<Modal
					id={modalContent.id}
					title={modalContent.title}
					year={modalContent.year}
					trademark={modalContent.trademark}
					category={modalContent.category}
					rating={modalContent.rating}
					alterVisibility={setModalVisibility}
				/>
			)}
		</main>
	);
}
