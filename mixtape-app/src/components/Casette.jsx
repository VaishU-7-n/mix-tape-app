
import cassetteImage from '/Users/vaishnavinelanti/mix-tape-app/mixtape-app/src/assets/casetteImage.png'
import './Casette.css'
export function Cassette({ style, songs, note, name }) {
  const slots = Array(12).fill(null).map((_, i) => songs[i] || null);

  return (
    <div className="cassette-container">
      <img src={cassetteImage} alt="cassette" />
      
      <div className="cassette-name">
        {name || "Tape Name"}
      </div>

      <div className="cassette-tracks">
        {/* Column 1 - songs 1-4 */}
        <div className="track-col">
          {slots.slice(0, 4).map((song, i) => (
            <p key={i} className="cassette-track">
              {song ? `${i + 1}. ${song.title}` : `${i + 1}. ———`}
            </p>
          ))}
        </div>

        {/* Column 2 - songs 5-8 */}
        <div className="track-col">
          {slots.slice(4, 8).map((song, i) => (
            <p key={i} className="cassette-track">
              {song ? `${i + 5}. ${song.title}` : `${i + 5}. ———`}
            </p>
          ))}
        </div>

        {/* Column 3 - songs 9-12 */}
        <div className="track-col">
          {slots.slice(8, 12).map((song, i) => (
            <p key={i} className="cassette-track">
              {song ? `${i + 9}. ${song.title}` : `${i + 9}. ———`}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}