import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovies(json.data.movie);

    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  });
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <strong> Rating : {movies.rating}</strong>
          <h1>{movies.title}</h1>

          <img src={movies.background_image} alt="" />
          <h6>{movies.description_full}</h6>
        </div>
      )}
    </div>
  );
}

export default Detail;
