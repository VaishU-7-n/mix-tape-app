import './Casette.css'
import casetteBack from '../assets/casette-back.png'
import { useState } from 'react'

export function Cassette({ style, img, songs, note, name }) {
  const slots = Array(12).fill(null).map((_, i) => songs[i] || null);
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`cassette-container ${style}`}>
      <img 
        src={flipped ? casetteBack : img} 
        alt="cassette" 
        onClick={() => setFlipped(!flipped)}
        style={{ cursor: 'pointer' }}
      />
      
      {!flipped && (
        <>
          <div className="cassette-name">
            {name || "Tape Name"}
          </div>
          <div className="cassette-tracks">
            <div className="track-col">
              {slots.slice(0, 4).map((song, i) => (
                <p key={i} className="cassette-track">
                  {song ? `${i + 1}. ${song.title}` : `${i + 1}. ———`}
                </p>
              ))}
            </div>
            <div className="track-col">
              {slots.slice(4, 8).map((song, i) => (
                <p key={i} className="cassette-track">
                  {song ? `${i + 5}. ${song.title}` : `${i + 5}. ———`}
                </p>
              ))}
            </div>
            <div className="track-col">
              {slots.slice(8, 12).map((song, i) => (
                <p key={i} className="cassette-track">
                  {song ? `${i + 9}. ${song.title}` : `${i + 9}. ———`}
                </p>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}