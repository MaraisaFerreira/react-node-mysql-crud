import './styles/GameListContainer.css';

import { FaTrash, FaPen } from 'react-icons/fa';
import { useEffect } from 'react';

export default function () {
	useEffect(effect);
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
					<tr>
						<td>Super Mario World</td>
						<td>1991</td>
						<td>Super Nintendo</td>
						<td>Arcade</td>
						<td>5 stars</td>
						<td>
							<FaPen className='icons pen' />{' '}
							<FaTrash className='icons trash' />
						</td>
					</tr>
				</tbody>
			</table>
		</main>
	);
}
