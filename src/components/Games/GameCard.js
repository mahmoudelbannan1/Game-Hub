import { useNavigate } from "react-router-dom";

function GameCard(props) {
  const { game, deleteGameFn } = props;
  const navigate = useNavigate();

  return (
    <>
      <div className="card">
        <img src={game.image} className="card-img-top" alt="..." />
        <div className="card-body">
          {game.tags.map((tag) => {
            return (
              <>
                <span className="badge text-bg-primary me-2" key={tag}>
                  {tag}
                </span>
              </>
            );
          })}
          <h5
            style={{ cursor: "pointer" }}
            className="card-title"
            onClick={() => navigate(`/game-details/${game.id}`)}
          >
            {game.title}
          </h5>
          <p className="card-text">{game.description}</p>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteGameFn(game.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default GameCard;

// function GameCard(props) {
//   const { data, deleteGameFn } = props;
//   return (
//     <div className="card h-100">
//       <img src={data.image} className="card-img-top" alt="..." />
//       <div className="card-body">
//         {/* {
//                     data.onSale && <span className="badge text-bg-success">
//                         On sale
//                     </span>
//                 } */}
//         {data.onSale ? (
//           <span className="badge text-bg-success">On sale</span>
//         ) : (
//           <span className="badge text-bg-danger">Original Price</span>
//         )}
//         <h5 className="card-title">{data.title}</h5>
//         <p className="card-text">{data.description}</p>
//         {data.tags.map((tag) => {
//           return (
//             <span className="badge text-bg-light mx-2" key={tag}>
//               {tag}
//             </span>
//           );
//         })}
//         <button
//           className="d-block btn btn-danger mt-4"
//           onClick={() => deleteGameFn(data.id)}
//         >
//           Delete Game
//         </button>
//       </div>
//     </div>
//   );
// }

// export default GameCard;
