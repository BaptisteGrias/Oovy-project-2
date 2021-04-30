/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardTrailer from './CardTrailer';
import CardFilm from './CardFilm';
import GetMoovie from './GetMoovie';

export default function GetTrailer(props) {
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
}*/
