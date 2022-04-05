import './styles/Modal.css';

import { FaPen, FaTrash } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

import axios from 'axios';

export default function ({
	id,
	title,
	year,
	trademark,
	category,
	rating,
	alterVisibility,
}) {
	const handleEdit = () => {
		alterVisibility(false);
		console.log('Edit');
	};

	const handleDelete = (id) => {
		alterVisibility(false);
		console.log(`http://localhost:3001/remove-game/${id}`);
		axios.delete(`http://localhost:3001/remove-game/${id}`);
	};

	const handleClose = () => {
		alterVisibility(false);
	};

	return (
		<div className='modal-container'>
			<div className='modal-content'>
				<h3>{title}</h3>
				<p>
					<span>Release Year:</span> {year}
				</p>
				<p>
					<span>Trademark:</span> {trademark}
				</p>
				<p>
					<span>Category</span>: {category}
				</p>
				<p>
					<span>Rating:</span> {rating} stars
				</p>
				<div className='opt-container'>
					<FaPen className='opt pen' onClick={handleEdit} />
					<FaTrash className='opt trash' onClick={(e) => handleDelete(id)} />
					<GrClose className='opt close' onClick={handleClose} />
				</div>
			</div>
		</div>
	);
}
