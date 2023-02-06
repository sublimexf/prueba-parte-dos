import SearchBar from './components/searchBar';
import './App.css';
import Table from './components/table';
import { ComponentsContainer, Title } from './style';

function App() {
  return (
    <div className="App">
      <ComponentsContainer>
        <Title>Heroes</Title>
        <SearchBar />
        <Table />
      </ComponentsContainer>
    </div>
  );
}

export default App;
