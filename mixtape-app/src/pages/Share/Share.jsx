import { Link } from "react-router-dom";
import { Cassette } from "../../components/Casette";

export function Share({ cassetteData}) {
  return (
    <>
      <h1>You've made your cassette!</h1>
      <Cassette
        style={cassetteData.style}
        songs={cassetteData.songs}
        note={cassetteData.note}
        name={cassetteData.name}
      />
      <button>Save</button>
      <Link to="/addnote"><button>Back</button></Link>
      
    </>
  );
}