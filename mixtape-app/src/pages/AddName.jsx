import './CreateTape/CreateTape.css'
import { useState } from "react";
export function AddName({ cassetteData, setCassetteData })
{
    const [name, setName] = useState(cassetteData.name);
        
          function handleSave() {
            setCassetteData({ ...cassetteData, name: name });
            }

    return(
        <>
        <h1 className='page-title'>Add Name</h1>

       <input
        className='input-container'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSave}
      className="save-btn">Save</button>
   
        </>
    );
}