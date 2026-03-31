import Pallette from './components/Pallette/Pallette';
import seedColors from './helper/seedColors';
import PalletteList from './components/PalletList/PalletteList';
import { generatePalette } from './helper/colorHelper';
import { BrowserRouter, Routes, Route } from "react-router";

import './App.css';

function App() {
  console.log(" - generateColors - ", generatePalette(seedColors[4]));
  return (
    <div>
      <Routes>
        <Route path="/" element={<PalletteList palettes={seedColors} />} />
        <Route path="/pallette/:id" element={<Pallette />} />
      </Routes>
    </div>
  );
}

export default App;
