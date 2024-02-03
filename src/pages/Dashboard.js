import React from 'react'
import "../styles/card.css"
import { Link } from 'react-router-dom';

const Card = ({ image, name="Name", category="Category", location="Location", popularity="Popularity", offers="Offers", costForTwo=200 }) => {
    return (
      <Link className="card" to="/product/1">
        <div className="card-header">
          <div className="popularity">Popularity</div>
          <div className="name">{name}</div>
          <div className="category">{category}</div>
          <div className="location">{location}</div>
        </div>
        <div className="card-body">
          <div className="image-container">
            <img src={image} alt={name} className="image" />
          </div>
          <div className="offers">
            <span className="offer-text">{offers} Offers trending</span>
            <span className="popularity-rating">*{popularity}</span>
          </div>
          <div className="cost-for-two">
            <span className="cost-text">${costForTwo}</span>
            <span className="popularity-rating">Cost for two</span>
          </div>
        </div>
      </Link>
    );
  };

function Dashboard() {
  return (
    <div>
      Dashboard
      {[1,2,3,4].map(ele=><Card/>)}
    </div>
  )
}

export default Dashboard
