import './styles/CardGame.css';

export default function ({
	id,
	title,
	year,
	trademark,
	category,
	rating,
	click,
}) {
	return (
		<div
			className='card-game'
			onClick={(e) => click(id, title, year, trademark, category, rating)}
		>
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
