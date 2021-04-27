import React from 'react';
import "./Card.css";

const baseUrl = "https://api.themoviedb.org/3";
const posterUrl = "https://image.tmdb.org/t/p/w200/"
const Card = ({ original_title, poster_path, backdrop_path }) => (
  <div>
  <figure>
    <figcaption>
      <img src={posterUrl + poster_path} alt={backdrop_path} />
      <p className="filmTitle">{original_title}</p>
    </figcaption>
  </figure>



  </div>

);

export default Card;