import './App.css';
import CatFact from './components/CatFact/CatFact';
import Header from './components/Header/Header';
import CatImage from './components/CatImage/CatImage';

function App() {
  return (
    <div className="App">
      <Header />
      <CatFact />
      <CatImage />
    </div>
  );
}

export default App;
