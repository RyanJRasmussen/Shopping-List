import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pantry from './pages/Pantry';
import ShoppingList from './pages/ShoppingList';
import FindRecipes from './pages/FindRecipes';
import Contact from './pages/Contact';
import Favorites from './pages/Favorites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/pantry' element={<Pantry/>}></Route>
        <Route path='/shoppinglist' element={<ShoppingList/>}></Route>
        <Route path='/findrecipes' element={<FindRecipes/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);