import React, { useState, useEffect } from 'react';
import './filters.css';
import Headerallpages from '../headerallpages';
import Years from './Years/Years';
import axios from 'axios';
import Card from './Card';
import Categorie from './Categorie';
import MobileNavigation from '../Filters/MobileNavigation';
import Rating from "./Rating/Rating";
import Footer from '../Footer/Footer';

function Filters() {
  const [films, setFilms] = useState([]);
  const [filmFilteredGenres, setFilmFilteredGenres] = useState(films);
  const [filmFilteredByYears, setFilmFilteredByYears] = useState(films);
  const [filmFilteredByRate, setFilmFilteredByRate] = useState (films);
  const [limit, setLimit] = useState(3);

  const movieList = () => {
    axios
      .get('https://api.themoviedb.org/3/list/99?api_key=17fad1db874b80e22fb1f7f67fb6189a')
      .then((response) => response.data)
      .then((data) => {
        setFilms(data.items);
      });
  };

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
      <div>
      <Years
        films={films}
        filmFilteredByYears={filmFilteredByYears}
        setFilmFilteredByYears={setFilmFilteredByYears}
        releaseDate={films.release_date}
      />
      </div>
      <div>
      <Rating
        films={films} 
        filmFilteredByRate={filmFilteredByRate} 
        setFilmFilteredByRate={setFilmFilteredByRate} 
      />
      </div>
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
      <div className="filmList">
        {filmFilteredByYears.slice(0, limit ? limit : filmFilteredByYears.length).map((film, index) => (
          <Card
            original_title={film.original_title}
            poster_path={film.poster_path}
            overview={film.overview}
            vote_average={film.vote_average}
            release_date={film.release_date}
          />
        ))}
      </div>
      <div className="filmList">
        {filmFilteredByRate
          .slice(0, limit ? limit : filmFilteredByRate.length)
          .map((film, index) => (
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
