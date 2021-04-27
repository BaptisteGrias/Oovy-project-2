import React, { useState } from 'react';
import './NeedHelp.css';
import axios from 'axios';
import CardFilm from './CardFilm';

function GetMoovie() {
  const [moovie, setMoovie] = useState([]);

  const RequestAPIMoovie = () => {
    axios
      .get('https://api.themoviedb.org/3/list/99?api_key=e68df8fb360e2ffe69d4812e69dd24b0')
      .then((response) => response.data)
      .then((data) => {
        console.log(data.items);
        setMoovie(data.items[Math.floor(Math.random() * 92)]);
      });
  };

  return (
    <div className="App">
      <h1>Need Help ?</h1>
      <button type="button" onClick={() => RequestAPIMoovie()}>
        C'est partis !
      </button>
      <div className="mooviebox">
        <CardFilm original_title={moovie.original_title} poster_path={moovie.poster_path} overview={moovie.overview} />
      </div>
    </div>
  );
}

export default GetMoovie;