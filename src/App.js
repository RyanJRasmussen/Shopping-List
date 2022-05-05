import React from 'react';
import './App.css';
import SearchResults from './components/searchResults';
import Layout from './layout';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Layout/>
      <h2>Home page</h2>
    </div>
  );
}

export default App;
