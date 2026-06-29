import { useState } from "react";
import "../../components/SongCard.css";
import { Link } from "react-router-dom";
import { Cassette } from "../../components/Casette";
import { SearchBar } from "../../components/SearchBar";
import { SongCard } from "../../components/SongCard";

export function AddSongs({ cassetteData, setCassetteData }) {
  const [results, setResults] = useState([]);

  function handleAdd(song) {
    if (cassetteData.songs.some((s) => s.id === song.id)) setResults([]);
    setCassetteData({
      ...cassetteData,
      songs: [...cassetteData.songs, song],
    });

    setResults(results.filter((s) => s.id !== song.id));
  }

  function handleRemove(songId) {
    setCassetteData({
      ...cassetteData,
      songs: cassetteData.songs.filter((s) => s.id != songId),
    });
  }

  return (
    <>
      <h1>Step 2: Add Your fav songs</h1>
      <SearchBar setResults={setResults}></SearchBar>

      <div className="songs-grid">
        {results.map((song) => (
          <div key={song.id} className="song-item">
            <SongCard song={song} />
            <button onClick={() => handleAdd(song)}>Add</button>
          </div>
        ))}
      </div>
      <div className="selected-songs">
        <h1>Added Songs</h1>
         <div className="songs-grid">
        {cassetteData.songs.map((song) => (
          <div key={song.id} className="song-item">
            <SongCard song={song} key={song.id}></SongCard>
            <button onClick={() => handleRemove(song.id)}>Remove</button>
          </div>
        ))}
        </div>
      </div>

      <Link to="/addnote">
        <button> next </button>
      </Link>
      <Link to="/create">
        <button> back </button>
      </Link>
      <Cassette
        style={cassetteData.style}
        songs={cassetteData.songs}
        img={cassetteData.img}
        note={cassetteData.note}
        name={cassetteData.name}
      />
      
    </>
  );
}
