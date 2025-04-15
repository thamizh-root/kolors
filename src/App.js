import logo from './logo.svg';
import Pallette from './Pallette';
import seedColors from './seedColors';
import './App.css';

function App() {
  return (
    <div>
      <Pallette {...seedColors[3]}/>
      {/* <p>Hello</p> */}
    </div>
  );
}

export default App;
