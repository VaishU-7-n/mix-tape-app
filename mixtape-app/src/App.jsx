import { Routes, Route } from 'react-router-dom';
import { AddSongs } from './pages/AddSongs/AddSongs';
import {Home} from './pages/Home/Home';
import {CreateTape} from './pages/CreateTape/CreateTape';
//import MyTapes from './pages/MyTapes/MyTapes';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/create" element={<CreateTape />} />
      <Route path="/addsongs" element={<AddSongs />} />
      
    </Routes>
  );
  /*
      <Route path="/my-tapes" element={<MyTapes />} /> */
}

export default App;