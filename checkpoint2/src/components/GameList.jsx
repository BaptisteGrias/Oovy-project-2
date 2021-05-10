import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Game from './Game';

export default function GameList() {
  const [games, setGames] = useState([]);

  const DisplayGamesFromAPI = async () => {
    await axios
      .get('https://wild-games.jsrover.wilders.dev/games')
      .then((response) => response.data)
      .then((data) => {
        setGames(data);
        console.log(games);
      });
  };
  useEffect(() => {
    DisplayGamesFromAPI();
  }, []);

  return (
    <div>
      <div className="GameBox">
        {games.map((game) => (
          <Game
            id={game.id}
            names={game.names}
            slug={game.slug}
            released={game.released}
            genre={game.genre}
            background_image={game.background_image}
          />
        ))}
      </div>
      <button onClick={DisplayGamesFromAPI}>display games</button>
    </div>
  );
}
