import { Link } from "react-router-dom";
import { Cassette } from "../../components/Casette";
import { AddName } from "../AddName";
import './CreateTape.module.css'

 const CASSETTE_STYLES = ["cassette-1", "cassette-2", "cassette-3"];

export function CreateTape({ cassetteData, setCassetteData }) {
  return (
    <>
      <title>Create tapes</title>
      <h1>Step 1: Choose your cassette</h1>

      {CASSETTE_STYLES.map((style) => (
        <div key={style} className="op">
          {style}
          {cassetteData.style === style && <span>✓</span>}
          <button onClick={() => setCassetteData({ ...cassetteData, style })}>
            Choose
          </button>
        </div>
      ))}

      <AddName cassetteData={cassetteData} setCassetteData={setCassetteData} />

      <Link to="/addsongs"><button>Next</button></Link>
      <Link to="/"><button>Back</button></Link>

      <Cassette
        style={cassetteData.style}
        songs={cassetteData.songs}
        note={cassetteData.note}
        name={cassetteData.name}
      />
    </>
  );
}