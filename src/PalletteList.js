import React, { Component } from 'react';
import { Link } from 'react-router'; // Import Link for navigation

class PaletteList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { palettes } = this.props; // Access the palettes array directly
    return (
      <div className="PaletteList">
        <h1>My Color Palettes</h1> {/* Added a heading for context */}
        <div>
          {palettes.map((palette) => (
            <div key={palette.id}> {/* Added a key for React's list rendering */}
              <Link to={`/pallette/${palette.id}`}>
                {palette.paletteName}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PaletteList;