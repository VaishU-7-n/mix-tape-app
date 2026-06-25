import { Link } from "react-router-dom";
export function CreateTape()
{
    return(
    <>
        <title>
            Create tapes
        </title>
        <h1>
             Step 1 : Choose your casette
        </h1>
        <Link to ="/addsongs"><button> Next </button></Link>

    </>);
}