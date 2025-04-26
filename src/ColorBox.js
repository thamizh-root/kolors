import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false, isHovering: false };
        this.changeCopyState = this.changeCopyState.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        });
    }

    handleMouseEnter() {
        this.setState({ isHovering: true });
    }

    handleMouseLeave() {
        this.setState({ isHovering: false });
    }

    render() {
        const { name, background } = this.props;
        const { copied, isHovering } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div
                    style={{ background, position: 'relative', display: 'grid' }}
                    className='ColorBox'
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                >
                    <div style={{ justifySelf: 'start', alignSelf: 'end', padding: '5px' }}>
                        <span style={{ textTransform: 'uppercase' }}>{name}</span>
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: '0px',
                            right: '0px',
                            padding: '5px',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            cursor: 'pointer',
                            opacity: isHovering ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out',
                            pointerEvents: 'none', 
                        }}
                    >
                        <span style={{ textTransform: 'uppercase' }}>{copied ? 'Copied!' : 'Copy'}</span>
                    </div>
                </div>
            </CopyToClipboard >
        );
    }
}

export default ColorBox;