import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInistance } from "../apis/config";
import Loader from "../components/Loader";
import { getGameDetails } from "../apis/games";

const GameDetails = () => {
  const params = useParams();
  const [game, setGame] = useState({});
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    getGameDetails(params.id)
      .then((res) => setGame(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, []);

  return (
    <p>
      <h1>GameDetails Page</h1>
      <hr />
      {loader && <Loader />}
      <p>{game.title}</p>
    </p>
  );
};

export default GameDetails;
