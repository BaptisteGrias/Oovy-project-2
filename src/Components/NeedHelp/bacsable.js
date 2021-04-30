/*export default function GetTrailer(props) {
    const [trailer, setTrailer] = useState([]);
    const id = 8587;
    const RequestAPITrailer = () => {
      axios
        .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=e68df8fb360e2ffe69d4812e69dd24b0&language=en-US`)
        .then((response) => response.data)
        .then((data) => {
          console.log(data.results);
          setTrailer(data.results);
        });
    };
  
    return (
      <div className="ButtonRollingMoovie">
        <button className="buttonRollingMoovie" type="button" onClick={() => RequestAPITrailer()}>
          Watch Trailer !
        </button>
      </div>
    );
  }
  import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NeedHelp.css';
import GetMoovie from './GetMoovie';

const url = 'https://image.tmdb.org/t/p/w500/';
const urlTrailer = 'https://api.themoviedb.org/3/movie/';
const Firstkey = '/videos?api_key=e68df8fb360e2ffe69d4812e69dd24b0&language=en-US';
const urlYoutube = 'https://www.youtube.com/watch?v=';
const MyIDone = 'https://api.themoviedb.org/3/movie/';
const MyIDtwo = '/videos?api_key=e68df8fb360e2ffe69d4812e69dd24b0&language=en-US';
const CardFilm = ({ overview, original_title, backdrop_path, poster_path, release_date, id }) =>
  function GetTrailer(props) {
    const [trailer, setTrailer] = useState([]);
    const RequestAPITrailer = () => {
      axios
        .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=e68df8fb360e2ffe69d4812e69dd24b0&language=en-US`)
        .then((response) => response.data)
        .then((data) => {
          console.log(data.results);
          setTrailer(data.results);
        });
    };

    return (
      <div className="containerRenderMoovieSyno">
        <div className="containerTitleSyno">
          <h2 className="titleMoovieCard">{original_title}</h2>
          <p className="textMoovieCard">{overview}</p>
          <p className="moovieDate">{release_date}</p>
          <div className="boxTrailerMoovie"></div>
          <p id={id}>{id}</p>
        </div>
        <div className="imgBox">
          <img className="imgMoovieCard" src={url + poster_path} alt={backdrop_path}></img>
        </div>
        <div className="ButtonRollingMoovie">
          <button className="buttonRollingMoovie" type="button" onClick={() => RequestAPITrailer()}>
            Watch Trailer !
          </button>
        </div>
      </div>
    );
  };

export default CardFilm;

/* Populate, Tagline(phrase d'accroche), année de sortie, note, le genre */
