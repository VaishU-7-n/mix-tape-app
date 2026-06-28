
import { useState } from "react";
export function AddName({ cassetteData, setCassetteData })
{
    const [name, setName] = useState(cassetteData.name);
        
          function handleSave() {
            setCassetteData({ ...cassetteData, name: name });
            }

    return(
        <>
        <h1>Step 2: Add Name</h1>

        
        <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
   
        </>
    );
}