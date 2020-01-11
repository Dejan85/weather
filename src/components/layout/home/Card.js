import React from "react";

// icon
import icon1 from "../../../sass/images/icon1.jpg";
import icon2 from "../../../sass/images/icon2.jpg";
import snow from "../../../sass/images/icon3.jpg";
import rain from "../../../sass/images/icon4.jpg";
import icon5 from "../../../sass/images/icon5.jpg";

const Card = ({ day, summary, temperature, icon }) => {
  const icons = { snow, rain };

  console.log(summary);

  return (
    <div className="home__card">
      <span className="home__span">{day}</span>
      <img className="home__img" src={icons[summary]} alt="slika" />
      <p className="home__degree">{Math.floor(temperature)}°</p>
      <p className="home__outsideweather">{summary}</p>
    </div>
  );
};

export default Card;
