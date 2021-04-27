import './NeedHelp.css';
const url = 'https://image.tmdb.org/t/p/original/';
const CardFilm = ({ overview, original_title, backdrop_path, poster_path }) => (
  <div className="blockTest">
    <figure className="QuoteCard">
      <figcaption>
        <h2>{original_title}</h2>

        <img src={url + poster_path} alt={backdrop_path}></img>
        <p>{overview}</p>
      </figcaption>
    </figure>
  </div>
);

export default CardFilm;

/* Populate, Tagline(phrase d'accroche), année de sortie, note, le genre */
