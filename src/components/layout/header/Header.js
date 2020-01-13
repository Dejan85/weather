import React, { useState } from "react";
import { connect } from "react-redux";

// components
import Date from "./Date";

//redux
import { showMenu } from "../../../redux/actions/menuAction";
import { backgroundAction } from "../../../redux/actions/backgroundAction";

const Header = ({ showMenu, backgroundAction }) => {
  const [style, setStyle] = useState(false);
  const [btnState, setBtnState] = useState(true);

  const hmburger = () => {
    setStyle(!style);
    showMenu(!style);
  };

  const btn = () => {
    btnState ? setBtnState(false) : setBtnState(true);
    backgroundAction(btnState);
  };

  return (
    <div
      className="header"
      style={
        btnState
          ? { background: "#2B244D" }
          : { background: "white", color: "#2e2852" }
      }
    >
      <div className="header__menu" onClick={hmburger}>
        <div
          className={!btnState ? "header__light" : null}
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
        <div
          className={!btnState ? "header__light" : null}
          style={style ? { width: 0 } : null}
        />
        <div
          className={!btnState ? "header__light" : null}
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
      <div className="header__btn">
        <p>Dark</p>
        <div
          onClick={btn}
          className="header__btn--container"
          style={!btnState ? { background: "#747474" } : null}
        >
          <div
            style={
              btnState
                ? { transform: "translateX(0rem)" }
                : { transform: "translateX(2.5rem)", background: "#332755" }
            }
            className="header__btn--btn"
          />
        </div>
        <p>Light</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  showMenu,
  backgroundAction
};

export default connect(null, mapDispatchToProps)(Header);
