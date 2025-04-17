import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Pallette.css';

class Pallette extends Component {
    render() {

        let colorBox = this.props.colors.map(
            c => {
                return <ColorBox key={c?.color} background={c?.color} name={c?.name} />
            }
        );

       // console.log(" -- this.props.colors -- ", this.props.colors);
       // console.log(" -- colorBox -- ", colorBox);

        return (
            <>
                <div className="Pallette">
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