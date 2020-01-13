import React, { useState, useEffect } from "react";

const Menu = ({ background }) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    setStyle({ width: "20rem" });
  }, []);
  return (
    <div className="menu">
      <ul
        className={`menu__ul ${background ? "menu__ulLight" : null} `}
        style={style}
      >
        <li className="menu__li">Home</li>
        {/* <li className="menu__li">Search</li> */}
        <li className="menu__li">Citys</li>
      </ul>
    </div>
  );
};

export default Menu;
