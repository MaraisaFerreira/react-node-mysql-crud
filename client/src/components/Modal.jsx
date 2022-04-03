import './styles/Modal.css';

import { FaPen, FaTrash } from 'react-icons/fa';

export default function ({
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

	const handleDelete = () => {
		alterVisibility(false);
		console.log('Delete');
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
					<FaTrash className='opt trash' onClick={handleDelete} />
				</div>
			</div>
		</div>
	);
}
