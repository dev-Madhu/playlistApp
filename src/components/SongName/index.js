import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongName = props => {
  const {songDetails, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = songDetails
  console.log(songDetails)

  const onClickDelete = () => {
    deleteSong(id)
  }

  return (
    <li className="song-item">
      <div className="song-box">
        <img src={imageUrl} className="song" alt="track" />
        <div className="info">
          <p className="song-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="dur-box">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete"
          testid="delete"
          onClick={onClickDelete}
        >
          <AiOutlineDelete color="#fff" size="20" />
        </button>
      </div>
    </li>
  )
}
export default SongName
