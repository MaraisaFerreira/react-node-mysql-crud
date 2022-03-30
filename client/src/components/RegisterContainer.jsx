import { useState } from 'react';
import './styles/RegisterContainer.css';

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
			<button className='btn-register' onClick={handleRegister}>
				Cadastrar
			</button>
		</div>
	);
}
