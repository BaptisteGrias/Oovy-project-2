import React, { useState, useEffect } from 'react';
import './Filters.css';
import Headerallpages from '../headerallpages';
import Dropdown from './Years';
import axios from 'axios';
import Card from './Card';
import Categorie from './Categorie';
import MobileNavigation from '../Filters/MobileNavigation';
import Footer from '../Footer/Footer';

function Filters() {
  const [films, setFilms] = useState([]);
  const [filmFilteredGenres, setFilmFilteredGenres] = useState(films);

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
      <div>
        <MobileNavigation films={films} setFilmFilteredGenres={setFilmFilteredGenres} />
        <Categorie films={films} setFilmFilteredGenres={setFilmFilteredGenres} />
      </div>
      <Dropdown startYear={1980} endYear={2012} />
      <Dropdown startYear={1980} endYear={2012} />
      <div className="filmList">
        {filmFilteredGenres.map((film, index) => (
          <Card original_title={film.original_title} poster_path={film.poster_path} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Filters;
