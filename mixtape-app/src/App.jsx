import { Routes, Route } from 'react-router-dom';

import {Home} from './pages/Home/Home';
import {CreateTape} from './pages/CreateTape/CreateTape';
//import MyTapes from './pages/MyTapes/MyTapes';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/create" element={<CreateTape />} />
      
    </Routes>
  );
  /*
      <Route path="/my-tapes" element={<MyTapes />} /> */
}

export default App;