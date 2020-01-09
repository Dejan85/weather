import React from "react";

const Card = ({ img, day }) => {
  return (
    <div className="home__card">
      <span className="home__span">{day}</span>
      <img className="home__img" src={img} alt="slika" />
      <p className="home__degree">9°</p>
      <p className="home__outsideweather">Raining</p>
    </div>
  );
};

export default Card;
