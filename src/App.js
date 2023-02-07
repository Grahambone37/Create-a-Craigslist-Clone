// Import data
import React from 'react'
// Import components
import './App.css';
import Gallery from './components/gallery/index'
import Searchbar from './components/searchbar';
import Directory from './components/directory';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar />
        <Directory />
        <Gallery />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
