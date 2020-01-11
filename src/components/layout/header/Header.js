import React, { useState } from "react";
import { connect } from "react-redux";

// components
import Date from "./Date";

//redux
import { showMenu } from "../../../redux/actions/menuAction";

const Header = ({ showMenu }) => {
  const [style, setStyle] = useState(false);

  const hmburger = () => {
    setStyle(!style);
    showMenu(!style);
  };

  return (
    <div className="header">
      <div className="header__menu" onClick={hmburger}>
        <div
          style={
            style
              ? {
                  position: "absolute",
                  // transform: "rotate(225deg)",
                  transform: "rotate(45deg)",
                  margin: 0
                }
              : null
          }
        />
        <div style={style ? { width: 0 } : null} />
        <div
          style={
            style
              ? {
                  position: "absolute",
                  // transform: "rotate(-225deg)",
                  transform: "rotate(-45deg)",
                  margin: 0
                }
              : null
          }
        />
      </div>
      <Date />
      <p>dark/light</p>
    </div>
  );
};

const mapDispatchToProps = {
  showMenu
};

export default connect(null, mapDispatchToProps)(Header);
