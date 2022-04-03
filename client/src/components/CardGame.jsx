import './styles/CardGame.css';

export default function ({ id, title, year, trademark, category, rating }) {
	const handleEdit = (v) => {
		console.log('Edit', v);
	};

	const handleDelete = (v) => {
		console.log('Delete', v);
	};

	return (
		<div className='card-game'>
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
		</div>
	);
}
