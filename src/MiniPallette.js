import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  };

function MiniPallette(props) {
    const { classes } = props;
    return (
        <>
            <h1>Hello World!</h1>
            <button className={classes.root}>Higher-order component</button>
        </>
    );
}

export default withStyles(styles)(MiniPallette);
