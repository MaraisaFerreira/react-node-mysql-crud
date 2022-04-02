import './styles/GameListContainer.css';

import { FaTrash, FaPen } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
			<table className='list'>
				<thead>
					<tr>
						<th>Title</th>
						<th>Year</th>
						<th>Trademark</th>
						<th>Category</th>
						<th>Rating</th>
						<th>Options</th>
					</tr>
				</thead>
				<tbody>
					{listGame.map((item) => {
						return (
							<tr key={item.id}>
								<td>{item.title}</td>
								<td>{item.year}</td>
								<td>{item.trademark}</td>
								<td>{item.category}</td>
								<td>{item.rating} stars</td>
								<td>
									<FaPen className='icons pen' />{' '}
									<FaTrash className='icons trash' />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</main>
	);
}
