import { useState } from "react";
import './SongCard.css'
export function SearchBar({ setResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  async function handleSearch() {
    if (searchTerm.trim() === "") return;

    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
      searchTerm
    )}&media=music&entity=song&limit=25`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      // Normalize iTunes shape to match what the rest of the app expects
      const normalized = (data.results || []).map((track) => ({
        id: track.trackId,
        title: track.trackName,
        artist: track.artistName,
        album: track.collectionName,
        image: track.artworkUrl100?.replace("100x100", "300x300"),
        preview: track.previewUrl,
        duration: track.trackTimeMillis ? Math.round(track.trackTimeMillis / 1000) : 0,
      }));

      setResults(normalized);
    } catch (err) {
      console.error("Search failed:", err);
    }
  }

  return (
    <>
      <input
      className="song-search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button 
        className="clear-button"
        onClick={() => { setResults([]); setSearchTerm(""); }}>
        Clear
      </button>
    </>
  );
}