
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (                          
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <img src={mainImage} alt="Main Thumbnail" style={{ width: '600px', height: '450px', objectFit: 'cover'}} />
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} onClick={() => handleThumbnailClick(image)}>
            <img src={image} alt={`Property Image ${index + 1}`} style={{ width: '200px', height: '150px', objectFit: 'cover', 
             marginLeft: '90px', cursor: 'pointer' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;


