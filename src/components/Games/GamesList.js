import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { axiosInistance } from "../../apis/config";
import { getGameList } from "../../apis/games";

const GameList = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getGameList()
      .then((res) => setGames(res.data))
      .catch((err) => console.log(err));
  }, []);

  function deleteGameHandler(id) {
    const filteredGame = games.filter((game) => {
      return game.id != id;
    });
    setGames(filteredGame);
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {games.map((game) => {
          return (
            <div className="col" key={game.id}>
              <GameCard game={game} deleteGameFn={deleteGameHandler} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GameList;
