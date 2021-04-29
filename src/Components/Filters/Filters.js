import React, { useState, useEffect } from 'react';
import './Filters.css';
import Headerallpages from '../headerallpages';
import Footer from '../Footer/Footer';
import Dropdown from './Years';
import axios from 'axios';
import Card from './Card';
import Categorie from './Categorie';

function Filters() {
  const [films, setFilms] = useState([]);
  const [filmFilteredGenres, setFilmFilteredGenres] = useState(films);
  const [limit, setLimit] = useState(3);

  const movieList = () => {
    axios
      .get('https://api.themoviedb.org/3/list/99?api_key=17fad1db874b80e22fb1f7f67fb6189a')
      .then((response) => response.data)
      .then((data) => {
        setFilms(data.items);
      });
  };

  console.log(films);

  useEffect(() => {
    movieList();
  }, []);

  return (
    <div>
      <Headerallpages />
      <Categorie films={films} setFilmFilteredGenres={setFilmFilteredGenres} />
      <Dropdown startYear={1980} endYear={2012} />
      <Dropdown startYear={1980} endYear={2012} />
      <div className="resultats">Resultats</div>
      <div className="filmList">
        {filmFilteredGenres.slice(0, limit ? limit : setFilmFilteredGenres.length).map((film, index) => (
          <Card
            original_title={film.original_title}
            poster_path={film.poster_path}
            overview={film.overview}
            vote_average={film.vote_average}
            release_date={film.release_date}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Filters;
