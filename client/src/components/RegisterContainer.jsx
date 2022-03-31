import { useState } from 'react';
import './styles/RegisterContainer.css';

import uncheckedURL from '../assets/star-unchecked.svg';
import checkedURL from '../assets/star-checked.svg';

import axios from 'axios';

export default function () {
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
		axios
			.post(url, {
				title: game.gameTitle,
				year: game.year,
				trademark: game.tradeMark,
				category: game.category || 'Undefined',
				rating: game.rating,
			})
			.then((resp) => {
				alert('Success');
			})
			.catch((err) => {
				alert('Sorry fail...');
			});
	};

	return (
		<div className='Register-container'>
			<h2>Nostalgic Games</h2>

			<input
				type='text'
				name='gameTitle'
				placeholder='Game Title'
				onChange={handleNewGame}
			/>
			<input
				type='number'
				name='year'
				placeholder='Release Year'
				onChange={handleNewGame}
			/>
			<input
				type='text'
				name='tradeMark'
				placeholder='Trademark'
				onChange={handleNewGame}
			/>
			<input
				type='text'
				name='category'
				placeholder='Category'
				onChange={handleNewGame}
			/>

			<fieldset className='radio-container'>
				<legend> &nbsp; Rating: &nbsp; </legend>

				<input
					type='radio'
					name='rating'
					id='r1'
					title='1'
					onChange={(e) => handleRating(1)}
				/>
				<label htmlFor='r1'>
					<img src={checkedURL} alt='1' />
				</label>
				<input
					type='radio'
					name='rating'
					id='r2'
					title='2'
					onChange={(e) => handleRating(2)}
				/>
				<label htmlFor='r2'>
					{game.rating === 2 ||
					game.rating === 3 ||
					game.rating === 4 ||
					game.rating === 5 ? (
						<img src={checkedURL} alt='2' />
					) : (
						<img src={uncheckedURL} alt='2' />
					)}
				</label>
				<input
					type='radio'
					name='rating'
					id='r3'
					title='3'
					onChange={(e) => handleRating(3)}
				/>
				<label htmlFor='r3'>
					{game.rating === 3 || game.rating === 4 || game.rating === 5 ? (
						<img src={checkedURL} alt='3' />
					) : (
						<img src={uncheckedURL} alt='3' />
					)}
				</label>
				<input
					type='radio'
					name='rating'
					id='r4'
					title='4'
					onChange={(e) => handleRating(4)}
				/>
				<label htmlFor='r4'>
					{game.rating === 4 || game.rating === 5 ? (
						<img src={checkedURL} alt='4' />
					) : (
						<img src={uncheckedURL} alt='4' />
					)}
				</label>
				<input
					type='radio'
					name='rating'
					id='r5'
					title='5'
					onChange={(e) => handleRating(5)}
				/>
				<label htmlFor='r5'>
					{game.rating === 5 ? (
						<img src={checkedURL} alt='5' />
					) : (
						<img src={uncheckedURL} alt='5' />
					)}
				</label>
			</fieldset>

			<button className='btn-register' onClick={handleRegister}>
				Add
			</button>
		</div>
	);
}
