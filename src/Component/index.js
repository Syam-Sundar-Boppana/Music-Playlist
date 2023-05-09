import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const Music = props => {
  const {item, deleteSong} = props
  const {imageUrl, name, genre, duration, id} = item
  const deleteUser = () => {
    deleteSong(id)
  }
  return (
    <li className="list">
      <div className="list-container">
        <img className="image" src={imageUrl} alt="track" />
        <div className="name-genre-container">
          <p>{name}</p>
          <p className="pop">{genre}</p>
        </div>
      </div>
      <div className="duration-button-container">
        <p>{duration}</p>
        <button
          type="button"
          className="button"
          data-testid="delete"
          onClick={deleteUser}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default Music
