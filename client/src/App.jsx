import './App.css';
import GamesListContainer from './components/GamesListContainer';
import RegisterContainer from './components/RegisterContainer';

function App() {
	return (
		<div className='App-container'>
			<RegisterContainer />
			<GamesListContainer />
		</div>
	);
}

export default App;
