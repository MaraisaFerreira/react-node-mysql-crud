import './styles/RegisterContainer.css';

import uncheckedURL from '../assets/star-unchecked.svg';
import checkedURL from '../assets/star-checked.svg';

export default function ({
	handleNewGame,
	handleRating,
	handleRegister,
	game,
}) {
	return (
		<div className='Register-container'>
			<h2>Nostalgic Games</h2>

			<input
				id='inp-title'
				type='text'
				name='gameTitle'
				placeholder='Game Title'
				value={game.gameTitle}
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

			<button className='btn-register' onClick={(e) => handleRegister()}>
				Add Game
			</button>
		</div>
	);
}
