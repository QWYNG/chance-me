import * as React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";

const TEXT_GRAY = "#e0e0e0";

const styles = {
  Header: {
    backgroundColor: "maroon",
    width: "100%",
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    fontFamily: "Fira Sans, Helvetica, sans-serif",
    fontSize: "2em"
  },
  links: {
    height: "100%",
    paddingRight: "30px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexGrow: "2",
  },
  button: {
    border: "solid 2px",
    borderColor: "white",
    padding: "8px",
    borderRadius: "10px",
    color: TEXT_GRAY,
    '&:hover': {
      backgroundColor: "white",
      borderColor: "white",
      color: "maroon"
    }
  },
  masthead: {
    color: TEXT_GRAY,
  }
};

interface HeaderClasses {
  Header: string;
  links: string;
  masthead: string;
  button: string;
}
interface HeaderProps {
  classes: HeaderClasses;
}

const Header: React.SFC<HeaderProps> = ({ classes }) => {
  return (
    <div className={classes.Header}>
      <Link to="/" className={classes.masthead}>
          <h1> ChanceMe </h1>
      </Link>
      <div className={classes.links}>
        <Link className={classes.button} to="/schools/new">
          Add Your School{" "}
        </Link>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Header);