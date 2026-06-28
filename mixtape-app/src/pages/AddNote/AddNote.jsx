import { Link } from "react-router-dom";
import { useState } from "react";
import { Cassette } from "../../components/Casette";

export function AddNote({ cassetteData, setCassetteData }) {
  const [note, setNote] = useState(cassetteData.note);

  function handleSave() {
    setCassetteData({ ...cassetteData, note: note });
  }

  return (
    <>
      <h1>Step 3: Add a note:</h1>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      
      <Link to="/share"><button>Next</button></Link>
      <Link to="/addsongs"><button>back</button></Link>
      <Cassette
        style={cassetteData.style}
        songs={cassetteData.songs}
        note={cassetteData.note}
        name={cassetteData.name}
      />
      
    </>
  );
}