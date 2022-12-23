import './App.css';
import Navbar from './components/Navbar';
import FeaturedItems from './products/featuredProducts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FeaturedItems />
    </div>
  );
}

export default App;
