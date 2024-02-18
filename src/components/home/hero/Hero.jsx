import React, {useState} from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import data from "../../../properties.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceSearch, setPriceSearch] = useState("");
  const [bedsSearch, setBedsSearch] = useState("");
  const [dateSearch, setDateSearch] = useState("");
  const [areaSearch, setAreaSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const filtered = data.filter((val) => {
      return (
        val.type.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (priceSearch === "" || val.price.toString().includes(priceSearch)) &&
        (bedsSearch === "" || val.bedrooms.toString().includes(bedsSearch)) &&
        (dateSearch === "" || val.added.month.includes(dateSearch)) &&
        (areaSearch === "" || val.location.toLowerCase().includes(areaSearch.toLowerCase()))
      );
    });
    setFilteredData(filtered);
  };

  
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Find Your Dream Home ' subtitle='Find new & featured property located in your local city.' />

          <form className='flex'>
            <div className='box'>               {/*......Search bar....... */} 
              <span>Property Type</span>
              <input id="type" type='text' placeholder='House,Flat...' onChange={(event) => {
                setSearchTerm(event.target.value);
              }} />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input id="price" type='text' placeholder='100,000-900,000' onChange={(event) => 
                setPriceSearch(event.target.value)} />
            </div>
            <div className='box'>
              <span>Bedrooms</span>
              <input id="beds" type='text' placeholder='3,5,6...' onChange={(event) => 
                setBedsSearch(event.target.value)}/>
            </div>
            <div className='box'>
              <span>Date Added</span>
              <input id="date" type='text' placeholder='04.11.2022' onChange={(event) => 
                setDateSearch(event.target.value)}/>
            </div>
            <div className='box'>
              <span>Postcode Area</span>
              <input id="area" type='text' placeholder='BR1,NW1...' onChange={(event) => 
                setAreaSearch(event.target.value)}/>
            </div>
            <button className='btn1' type="button" onClick={handleSearch}>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>                            {/*.....Property list...... */} 
      <div className="template_Container">
      {filteredData.map((val) => (
                <div className="template" key ={val.id}>
                  <img src={val.picture} alt="picture" />
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                  <p className="location"> <FontAwesomeIcon icon={faLocationDot}/> {val.location}</p>
                  <div className="lstline">
                    <h4 className="price">$ {val.price}/=</h4>
                    <h4>{val.type}</h4>
                    <Link to={`/Property/${val.id}`}>View</Link>
                  </div>
                </div>
              )
            )
        }
      </div>
    </>
  )
}

export default Hero
