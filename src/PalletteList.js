import React from 'react';
import { useNavigate } from 'react-router'; 
import MiniPallette from './MiniPallette';
import { withStyles } from '@material-ui/styles';
import bg from "./bg.svg";

const styles = {
  root: {
    backgroundColor: "blue",
    backgroundImage: `url(${bg})`,
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "scroll"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  }
};

function PaletteList({ palettes, classes }) {
  const navigate = useNavigate();

  const goToPalette = (id) => {
    navigate(`/pallette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPallette
              {...palette}
              key={palette.id}
              handleClick={() => goToPalette(palette.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
