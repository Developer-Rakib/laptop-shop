import './App.css';
import Header from './components/Header/Header';
import Laptops from './components/Laptops/Laptops';
import Questions from './components/Questions/Questions';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Laptops></Laptops>
      <Questions></Questions>
    </div>
  );
}

export default App;
