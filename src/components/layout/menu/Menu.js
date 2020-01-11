import React, { useState } from "react";

const Menu = () => {
  const [style, setStyle] = useState();
  window.setTimeout(() => {
    setStyle({
      menu: { background: "rgba(#000000, 0.8)" },
      ul: { width: "20rem" }
    });
  }, 100);
  return (
    <div className="menu" style={style && style.menu}>
      <ul className="menu__ul" style={style && style.ul}>
        <li className="menu__li">Home</li>
        <li className="menu__li">Search</li>
        <li className="menu__li">Citys</li>
      </ul>
    </div>
  );
};

export default Menu;
