import { Link } from "react-router-dom";
import { Cassette } from "../../components/Casette";
import { AddName } from "../AddName";
import "./CreateTape.css";

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
    <div className="create-tape-page">
      <h1 className="page-title">Choose your cassette</h1>

      <div className="carousel">
        {CASSETTE_STYLES.map(({ id, img }) => {
          const isSelected = cassetteData.style === id;
          return (
            <div
              key={id}
              className={`carousel-card ${isSelected ? "selected" : ""}`}
              onClick={() => setCassetteData({ ...cassetteData, style: id, img })}
            >
              <img src={img} alt={id} className="cassette-img" />
              {isSelected && <span className="check-badge">✓</span>}
            </div>
          );
        })}
      </div>

      <AddName cassetteData={cassetteData} setCassetteData={setCassetteData} />
      <Cassette
        style={cassetteData.style}
        img={cassetteData.img}
        songs={cassetteData.songs}
        note={cassetteData.note}
        name={cassetteData.name}
      />
      

      <div className="nav-buttons">
        <Link to="/"><button className="btn-secondary">Back</button></Link>
        <Link to="/addsongs"><button className="btn-primary">Next</button></Link>
      </div>

    </div>
  );
}