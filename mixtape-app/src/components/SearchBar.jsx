import { useState } from "react";

export function SearchBar({ setResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  async function handleSearch() {
    if(searchTerm.trim() === "")
    return;
    
        const res = await fetch(
      `https://corsproxy.io/?https://api.deezer.com/search?q=${searchTerm}`,
    );
    const data = await res.json();
    setResults(data.data);
    console.log(data);
    
  }

  return (
    <>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button onClick={()=>{setResults([]);setSearchTerm([])}}>Clear</button>
    </>
  );
}
