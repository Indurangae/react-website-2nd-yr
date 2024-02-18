import React, { useState, useEffect } from 'react';
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import PropertyDetail from '../home/hero/PropertyView/PropertyDetail'
import FavoritesList from '../home/hero/favourite/FavoritesList'

const Pages = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from local storage on component mount
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);
       // add function
  const addToFavorites = (property) => {
    setFavorites((prevFavorites) => [...prevFavorites, property]);
    localStorage.setItem('favorites', JSON.stringify([...favorites, property]));
  };     // remove function
  const removeFromFavorites = (propertyId) => {
    const updatedFavorites = favorites.filter((property) => property.id !== propertyId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };    // clear all function
  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('favorites');
  };

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route
            path="/property/:id"
            render={(props) => (
              <PropertyDetail {...props} addToFavorites={addToFavorites} favorites={favorites} />
            )}
          />
          <Route path="/favorites" render={() => <FavoritesList favorites={favorites} 
                  removeFromFavorites={removeFromFavorites} clearFavorites={clearFavorites}/>} />
          </Switch>
          <Footer />
      </Router>
    </>
  )
}

export default Pages
