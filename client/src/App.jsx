import './App.css';
import GamesContainer from './components/GamesContainer';
import RegisterContainer from './components/RegisterContainer';

function App() {
	return (
		<div className='App-container'>
			<RegisterContainer />
			<GamesContainer />
		</div>
	);
}

export default App;
