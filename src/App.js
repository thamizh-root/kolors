import logo from './logo.svg';
import Pallette from './Pallette';
import seedColors from './seedColors';
import PalletteList from './PalletteList';
import { generatePalette } from './colorHelper';
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
      {/* <Pallette pallette={generatePalette(seedColors[4])} /> */}
    </div>
  );
}

export default App;
