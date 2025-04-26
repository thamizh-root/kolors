import React from 'react';
import { useNavigate } from 'react-router';
import MiniPallette from './MiniPallette';
import { withStyles } from '@material-ui/styles';
import bg from "./bg.svg";

const styles = {
  root: {
    backgroundColor: "blue",
    backgroundImage: `url(${bg})`,
    minHeight: "100vh", /* Use minHeight to ensure it covers the viewport */
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "60%", /* Adjust container width for better mobile view */
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: "2rem" /* Add some top margin */
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white", /* Ensure text is readable on blue background */
    alignItems: "center", /* Vertically align items in the nav */
    marginBottom: "1rem"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2%", /* Adjust gap for smaller screens */
    marginTop: "2rem"
  },
  "@media (max-width: 992px)": { /* For tablets */
    container: {
      width: "90%",
    },
    palettes: {
      gridTemplateColumns: "repeat(2, 47%)", /* Two columns on tablets */
      gridGap: "3%",
    }
  },
  "@media (max-width: 600px)": { /* For mobile phones */
    container: {
      width: "95%",
    },
    palettes: {
      gridTemplateColumns: "repeat(1, 100%)", /* One column on mobile */
      gridGap: "1rem",
    }
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
          {/* You might add a link here to create a new palette on larger screens */}
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