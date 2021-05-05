import CardTrailer from './CardTrailer';
import GetMoovie from './GetMoovie';
<<<<<<< HEAD
import './needHelp.css';

=======
import GetTrailer from './GetTrailer';
import './NeedHelp.css';
>>>>>>> P2WCS40_REFRESH
const url = 'https://image.tmdb.org/t/p/w500/';
const urlYoutube = 'https://www.youtube.com/watch?v=';
const MyIDone = 'https://api.themoviedb.org/3/movie/';
const MyIDtwo = '/videos?api_key=e68df8fb360e2ffe69d4812e69dd24b0&language=en-US';

const CardFilm = ({ overview, original_title, backdrop_path, poster_path, release_date, id }) => (
  <div className="containerRenderMoovieSyno">
    <div className="containerTitleSyno">
      <h2 className="titleMoovieCard">{original_title}</h2>
      <p className="textMoovieCard">{overview}</p>
      <p className="moovieDate">{release_date}</p>
      <GetTrailer id={id} />
    </div>
    <div className="imgBox">
      <img className="imgMoovieCard" src={url + poster_path} alt={backdrop_path}></img>
    </div>
  </div>
);

export default CardFilm;

/* Populate, Tagline(phrase d'accroche), année de sortie, note, le genre */
