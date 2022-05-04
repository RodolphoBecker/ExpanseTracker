import PageContainer from './components/Containers/PageContainer'; 
import Navbar from './components/Navbar/Navbar';
import './styles/App.scss'

function App() {
	return (
		<div className="App">
			<PageContainer>
				<Navbar />
			</PageContainer>
		</div>
	);
}

export default App;
