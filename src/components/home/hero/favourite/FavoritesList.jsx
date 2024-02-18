import React from 'react';
import { Link } from 'react-router-dom';
import "./favoriteslist.css"

const FavoritesList = ({ favorites, removeFromFavorites, clearFavorites }) => {
  if (favorites.length === 0) {
    return <p className='EmptyTitle'>No properties in your favorites.</p>;
  }

  const handleRemoveFromFavorites = (propertyId) => {
    removeFromFavorites(propertyId);
  };

  const handleClearFavorites = () => {
    clearFavorites();
  };

  return (
    <div>
      <h2>Your Favorites</h2>
      <div className='clearbtn'>
        <button  onClick={handleClearFavorites}>Clear All</button>
      </div>
      <div className='contaner1'>
        <ul>
          {favorites.map(property => (
            <li key={property.id}>
              
                <Link to={`/property/${property.id}`}>
                <div className='contaner2'>
                  <img src={property.picture} alt="Property-image" />
                  <div className='contaner3'>
                    <h4>{property.title} </h4>
                    <h3>${property.price.toLocaleString()} </h3>
                  </div>
                  <button onClick={() => handleRemoveFromFavorites(property.id)}>
                    Delete
                  </button>
                </div>
                
                </Link>
              
              
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default FavoritesList;

