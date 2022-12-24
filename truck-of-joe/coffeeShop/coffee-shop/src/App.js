import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FeaturedProducts from './products/FeaturedProducts';
import PartialMenu from './products/PartialMenu';

function App() {
  let initialState = [];
    const [photos, setPhotos] = useState(initialState)
    
    const handleGetPhotos = async () => {
      fetch('https://jsonplaceholder.typicode.com/photos?_start=3&_limit=3')
      .then(response => response.json())
      .then(json => {
        initialState = json;
        setPhotos(initialState);
      })
    }

    useEffect(() => {
      handleGetPhotos()
      // eslint-disable-next-line
    },[])
  return (
    <div className="App">
      <Navbar />
      <FeaturedProducts />
      <div className='bg-light'>
        <h1 className='text-white p-5' style={{textShadow: '1px 1px 4px black'}}>COFFEE IS WHO WE ARE</h1>
        <PartialMenu
        photos={photos}
        />
      </div>
    </div>
  );
}

export default App;
