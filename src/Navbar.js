
import { Component } from 'react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = { format: 'hex' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ format: event.target.value });
    this.props.handleChange(event.target.value);
  }

  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='#'>reactcolorpicker</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className='select-container'>
          <select value={this.state.format} onChange={this.handleChange}>
            <option value='hex'>HEX - #ffffff</option>
            <option value='rgb'>RGB - rgb(255,255,255)</option>
            <option value='rgba'>RGBA - rgba(255,255,255, 1.0)</option>
          </select>
        </div>
      </header>
    );
  }
}


export default Navbar;
