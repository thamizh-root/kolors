import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './Pallette.css';

class Pallette extends Component {

    constructor(props) {
        super(props);
        this.state = { level: 300 };
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        this.setState({ level: level });
    }

    render() {
        const { colors } = this.props.pallette;
        if(colors?.length > 0){
            console.log("yes, it's an array");
        } else {
            console.log("colors?.length", colors?.length > 0);
        }
        let colorBox = colors[this.state.level].map(
            c => {
                return <ColorBox key={c?.hex} background={c?.hex} name={c?.name} />
            }
        );
        return (
            <>
                <div className="Pallette">
                    <Slider className="slider" onChangeComplete={this.changeLevel} defaultValue={this.state.level} min={100} max={900} step={100} />
                    {/* Navbar goes here */}
                    <div className="Pallette-colors">
                        {/* list of color box(s) */}
                        {colorBox}
                    </div>
                    {/* footer here */}
                </div>
            </>
        )
    };
}

export default Pallette;