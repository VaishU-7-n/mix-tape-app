import './SongCard.css'

export function SongCard({ song }) {
  return (
    <div className="song-card">
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
      <img src={song.image} className='album-cover-image'></img>
      <p>
        Duration: {Math.floor(song.duration / 60)}:
        {String(Math.floor(song.duration % 60)).padStart(2, "0")}
      </p>
    </div>
  );
}