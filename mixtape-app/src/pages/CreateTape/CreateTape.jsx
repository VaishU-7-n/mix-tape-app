import { Link } from "react-router-dom";
import { Cassette } from "../../components/Casette";
import { AddName } from "../AddName";

import img1 from '../../assets/casetteImage.png'
import img2 from '../../assets/casetteImage2.png'
import img3 from '../../assets/casetteImage3.png'
import img4 from '../../assets/casetteImage4.png'

const CASSETTE_STYLES = [
  { id: "cassette-1", img: img1 },
  { id: "cassette-2", img: img2 },
  { id: "cassette-3", img: img3 },
  { id: "cassette-4", img: img4 },
];

export function CreateTape({ cassetteData, setCassetteData }) {
  return (
    <>
      <h1>Step 1: Choose your cassette</h1>

      {CASSETTE_STYLES.map(({ id, img }) => (
        <div key={id} className="op">
          <img src={img} alt={id} width={120} />
          {cassetteData.style === id && <span>✓</span>}
          <button onClick={() => setCassetteData({ ...cassetteData, style: id, img })}>
            Choose
          </button>
        </div>
      ))}

      <AddName cassetteData={cassetteData} setCassetteData={setCassetteData} />
      <Link to="/addsongs"><button>Next</button></Link>
      <Link to="/"><button>Back</button></Link>
    
      <Cassette
        style={cassetteData.style}
        img={cassetteData.img}
        songs={cassetteData.songs}
        note={cassetteData.note}
        name={cassetteData.name}
      />
    </>
  );
}