import GameList from './GameList';

const Game = ({ slug, names, released, background_image, genre, id }) => (
  <>
    <h2 className="slug">{slug}</h2>
    <p className="">{id}</p>
    <h2 className="names">{names}</h2>
    <p className="released">{released}</p>
    <p className="genre">{genre}</p>
    <img className="imgback" src={background_image}></img>
  </>
);

export default Game;
