import './styles/RegisterContainer.css';

export default function () {
	return (
		<div className='Register-container'>
			<h2>Cadastro</h2>

			<input type='text' name='title' placeholder='Game...' />
			<input type='text' name='year' placeholder='Ano...' />
			<input type='text' name='category' placeholder='Categoria...' />
			<button className='btn-register'>Cadastrar</button>
		</div>
	);
}
