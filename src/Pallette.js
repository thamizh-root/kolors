import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

import './Pallette.css';

class Pallette extends Component {

    constructor(props) {
        super(props);
        this.state = { level: 300, format: 'hex' };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeFormat(val){
        this.setState({ format: val });
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
                return <ColorBox key={c?.hex} background={c[this.state.format]} name={c?.name} />
            }
        );
        return (
            <>
                <div className="Pallette">
                    <Navbar changeLevel={this.changeLevel} handleChange={this.changeFormat} level={this.state.level}/>
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