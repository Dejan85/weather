import React, { useEffect } from "react";

// images
import img from "../../../sass/images/1.jpg";
import icon1 from "../../../sass/images/icon1.jpg";
import icon2 from "../../../sass/images/icon2.jpg";
import icon3 from "../../../sass/images/icon3.jpg";
import icon4 from "../../../sass/images/icon4.jpg";
import icon5 from "../../../sass/images/icon5.jpg";

// components
import Card from "./Card";

// hooks
import useFetchApi from "../../hooks/global/useFetchApi";

const Home = () => {
  const { fetchApi } = useFetchApi();

  //   useEffect(() => {
  //     window.navigator.geolocation.getCurrentPosition(position => {
  //       fetchApi(position.coords.latitude, position.coords.longitude);
  //     });
  //   }, []);

  return (
    <div className="home">
      <div className="home__circle" />
      <div className="home__weather">
        <div className="home__header" style={{ background: `url(${img})` }}>
          <div className="home__info">
            <div className="home__temp">
              <div className="home__heading">
                <h1 className="home__h1">12°</h1>
                <h2 className="home__h2">CLOUDY</h2>
              </div>
              <div className="home__heading2">
                <div className="home__heading2--container">
                  <h3 className="home__h3">HUMIDITY</h3>
                  <h4 className="home__h4">64%</h4>
                </div>
                <div className="home__heading2--container">
                  <h3 className="home__h3">WIND</h3>
                  <h4 className="home__h4">12 K/M</h4>
                </div>
                <div className=""></div>
              </div>
            </div>
            <div className="home__city">
              <h5 className="home__h5">
                Belgrade
                <div className="home__city--line" />
              </h5>
            </div>
          </div>
          <div className="home__header--border" />
        </div>
        <div className="home__body">
          <Card img={icon1} day="MON" />
          <Card img={icon2} day="TUE" />
          <Card img={icon3} day="WED" />
          <Card img={icon4} day="THU" />
          <Card img={icon5} day="FRI" />
        </div>
      </div>
    </div>
  );
};

export default Home;
