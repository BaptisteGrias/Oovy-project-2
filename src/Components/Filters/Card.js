import React from 'react';
import './Card.css';

const baseUrl = 'https://api.themoviedb.org/3';
const posterUrl = 'https://image.tmdb.org/t/p/w300/';
const Card = ({ original_title, poster_path, backdrop_path, overview }) => (
  <div>
    <figure>
      <figcaption>
        <p className="filmTitle">{original_title}</p>
        <div className="conteneura">
          <img className="imgcontenu" src={posterUrl + poster_path} alt={backdrop_path} />
          <div class="txtcontenu">{overview}</div>
        </div>
      </figcaption>
    </figure>
  </div>
);

export default Card;
