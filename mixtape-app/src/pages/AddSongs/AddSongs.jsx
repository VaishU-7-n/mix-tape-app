import { useState } from "react";
import { songs } from "../../data/songs";
export function AddSongs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);

  function handleSearch() {
    const matches = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setResults(matches);
  }
  function handleAdd(song) {
    if (selectedSongs.some((s) => s.id === song.id)) return;
    setSelectedSongs((prev) => [
      ...prev,
      { id: song.id, title: song.title, artist: song.artist },
    ]);
  }

  return (
    <>
      <h1>Step 2: Add Your fav songs</h1>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      {results.map((song) => (
        <div key={song.id}>
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
          <button onClick={() => handleAdd(song)}>Add</button>
        </div>
      ))}
      <div className="selected-songs">
        <h1>Added Songs</h1>
        {selectedSongs.map((song) => (
          <div key={song.id}>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
        ))}
      </div>
    </>
  );
}
