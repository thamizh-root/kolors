
import { Component } from 'react';
import Slider from 'rc-slider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth >
          <InputLabel id="demo-simple-select-label">Format</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.format}
            label="Format"
            onChange={this.handleChange}
            style={{ height: 30 }}
          >
            <MenuItem value={"hex"}>HEX - #FFFF</MenuItem>
            <MenuItem value={"rgb"}>RGB - rgb(225, 225, 225)</MenuItem>
            <MenuItem value={"rgba"}>RGBA - rgba(225, 225, 225, 0.5)</MenuItem>
          </Select>
        </FormControl>
      </Box>
        </div>
      </header>
    );
  }
}


export default Navbar;
