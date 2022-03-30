import { useState } from 'react';
import './styles/RegisterContainer.css';

import uncheckedURL from '../assets/star-unchecked.svg';

export default function () {
	const [game, setGame] = useState({});

	const handleNewGame = (ev) => {
		setGame((prevState) => ({
			...prevState,
			[ev.target.name]: ev.target.value,
		}));
	};

	const handleRegister = () => {
		console.log(game);
	};

	return (
		<div className='Register-container'>
			<h2>Nostalgic Games</h2>

			<input
				type='text'
				name='gameTitle'
				placeholder='Game...'
				onChange={handleNewGame}
			/>
			<input
				type='text'
				name='year'
				placeholder='Ano...'
				onChange={handleNewGame}
			/>
			<input
				type='text'
				name='tradeMark'
				placeholder='Marca...'
				onChange={handleNewGame}
			/>
			<input
				type='text'
				name='category'
				placeholder='Categoria...'
				onChange={handleNewGame}
			/>

			<fieldset className='radio-container'>
				<legend> Classificação: </legend>

				<input type='radio' name='rating' id='r1' title='1' />
				<label htmlFor=''>
					<img src={uncheckedURL} alt='1' />
				</label>
				<input type='radio' name='rating' id='r2' title='2' />
				<label htmlFor=''>
					<img src={uncheckedURL} alt='2' />
				</label>
				<input type='radio' name='rating' id='r3' title='3' />
				<label htmlFor=''>
					<img src={uncheckedURL} alt='3' />
				</label>
				<input type='radio' name='rating' id='r4' title='4' />
				<label htmlFor=''>
					<img src={uncheckedURL} alt='4' />
				</label>
				<input type='radio' name='rating' id='r5' title='5' />
				<label htmlFor=''>
					<img src={uncheckedURL} alt='5' />
				</label>
			</fieldset>

			<button className='btn-register' onClick={handleRegister}>
				Cadastrar
			</button>
		</div>
	);
}
