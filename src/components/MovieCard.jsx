import { ReactComponent as Star } from "../assets/star.svg";
import './MovieCard.css'

const MovieCard = ({ src, title, genres, rating }) => {
  return (
    <div className='MovieCard'>
      <img src={src} alt={title} />
      <div className="details">
        <span className='title'>{title}</span>
        <div className='genres-rating'>
          <span className="genres">
            { 
              genres[0] && genres.map((genre) => {
                return <span className='tag'>{genre}</span>
              })
            }
          </span>
          <span className='rating'><Star />{rating || "NA"}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard