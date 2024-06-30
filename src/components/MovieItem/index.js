import './index.css'

const MovieItem = ({movie}) => (
  <li className="movie-item">
    <img src={movie.imageUrl} alt="Movie Poster" />
  </li>
)

export default MovieItem
