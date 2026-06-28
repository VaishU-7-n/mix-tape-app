import { Routes, Route } from 'react-router-dom';
import { AddSongs } from './pages/AddSongs/AddSongs';
import {Home} from './pages/Home/Home';
import {CreateTape} from './pages/CreateTape/CreateTape';
import { AddNote } from './pages/AddNote/AddNote';
import { Share } from './pages/Share/Share';
import { useState } from 'react';

//import MyTapes from './pages/MyTapes/MyTapes';

function App() {

  const [cassetteData, setCassetteData] = useState({
  style: null,        // chosen in Create page
  songs: [],          // added in AddSongs page
  note: "",  
  name:""         // added in AddNote page
});

  return (
    <Routes>
      <Route path ="/" index element={<Home />} />
      <Route path="/create" element={<CreateTape cassetteData={cassetteData} setCassetteData={setCassetteData} />} />
      <Route path="/addsongs" element={<AddSongs cassetteData={cassetteData} setCassetteData={setCassetteData} />} />
      <Route path="/addnote" element={<AddNote cassetteData={cassetteData} setCassetteData={setCassetteData} />} />
      <Route path="/share" element={<Share cassetteData={cassetteData} />} />
     
      
    </Routes>
  );
  /*
       */
}

export default App;