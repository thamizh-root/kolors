import logo from './logo.svg';
import Pallette from './Pallette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';
import './App.css';

function App() {
  console.log(" - generateColors - ", generatePalette(seedColors[4]));
  return (
    <div>
      <Pallette pallette={generatePalette(seedColors[4])} />
      {/* <p>Hello</p> */}
    </div>
  );
}

export default App;
