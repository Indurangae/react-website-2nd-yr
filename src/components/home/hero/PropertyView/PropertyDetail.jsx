import React, { useState } from 'react';
import data from "../../../../properties.json";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./propertydetail.css"
import ImageSlider from "./ImageSlider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const PropertyDetail = ({ match, addToFavorites, favorites }) => {
  const propertyId = match.params.id;
  const property = data.find(item => item.id === propertyId);

  const isFavorite = favorites.some(favorite => favorite.id === propertyId);

  const handleAddToFavorites = () => {
    addToFavorites(property);
  };

  if (!property) {
    
    return (
      <div>
        <h2>Property not found</h2>
      </div>
    );
  }

  return (
    <div className="container1">
      <h1>{property.title}</h1>
      <br></br>
      <br></br>
      <ImageSlider images={property.images} />  {/*...image slider...*/} 
      <br></br>
      <br></br>
      <div className='container2'>
        <Tabs>
          <TabList>
            <Tab>Description</Tab>              {/*.....React Tabs...... */} 
            <Tab>Floor Plan</Tab>
            <Tab>Map</Tab>
          </TabList>

          <TabPanel>
            <h3>{property.title} - Description</h3>
            <article>{property.description}</article>
          </TabPanel>

          <TabPanel>
            <h3>{property.title} - Floor Plan</h3>
            <img src={property.plan} alt="Floor Plan" />
          </TabPanel>

          <TabPanel>
            <h3>{property.title} - Map</h3>
            <img src={property.map} alt="Map" />
          </TabPanel>
        </Tabs>
        <div className='container3'>
          <h3 className='h3'>Property Type: {property.type}</h3>
          <p className="location"> <FontAwesomeIcon icon={faLocationDot}/> {property.location}</p>
          <h3 className='h3'>Bedrooms: {property.bedrooms}</h3>
          <h4 className='h4'>Price: ${property.price.toLocaleString()}</h4>
          <button onClick={handleAddToFavorites} disabled={isFavorite}>
            <FontAwesomeIcon icon={faHeart} /> Add to Favorites
          </button>
          {isFavorite && <p>This property is in your favorites!</p>}
        </div>
      </div>
      
    </div>
  );
};

export default PropertyDetail;