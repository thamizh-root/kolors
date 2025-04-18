import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import seedColors from './seedColors'; // Assuming seedColors is in the parent directory
import { generatePalette } from './colorHelper'; // Assuming colorHelper is in the parent directory
import './Pallette.css';

function Pallette() {
    console.log(" ------ Pallette ----- ");
  const { id } = useParams();
  const [level, setLevel] = useState(300);
  const [format, setFormat] = useState('hex');
  const [palette, setPalette] = useState(null);

  // useCallback is used here for memoization, though not strictly necessary for this simple case
  const findPalette = useCallback((paletteId) => {
    return seedColors.find((p) => p.id === paletteId);
  }, []);

  // This function will run once when the component mounts and when 'id' changes
  React.useEffect(() => {
    const foundPalette = findPalette(id);
    if (foundPalette) {
      setPalette(generatePalette(foundPalette));
    } else {
      // Handle the case where the palette with the given ID is not found
      console.log(`Palette with id "${id}" not found.`);
      // You might want to redirect the user or display an error message here
    }
  }, [id, findPalette]);

  const changeFormat = useCallback((val) => {
    setFormat(val);
  }, []);

  const changeLevel = useCallback((newLevel) => {
    setLevel(newLevel);
  }, []);

  if (!palette) {
    // Render something while the palette is loading or if it wasn't found
    return <div>Loading palette...</div>;
  }

  const colorBox = palette.colors[level].map((c) => (
    <ColorBox key={c.hex} background={c[format]} name={c.name} />
  ));

  return (
    <div className="Pallette">
      <Navbar level={level} changeLevel={changeLevel} format={format} changeFormat={changeFormat} />
      <div className="Pallette-colors">{colorBox}</div>
      <footer className="Pallette-footer">
        {palette.paletteName} <span className="footer-emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
}

export default Pallette;