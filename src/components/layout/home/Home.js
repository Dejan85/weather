import React, { useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";

// images
import img from "../../../sass/images/1.jpg";

// components
import Card from "./Card";
import Menu from "../menu/Menu";

// hooks
import useFetchApi from "../../hooks/global/useFetchApi";

const Home = props => {
  const { menu } = props.menu;
  const { background } = props.background;
  const { fetchApi, curently, daily } = useFetchApi();

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(position => {
      fetchApi(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return (
    <div className={`home ${background ? "home__lightBackground" : null}`}>
      {menu && <Menu background={background} />}
      <div
        className={`home__circle ${background ? "home__circleLight" : null}`}
      />
      <div className="home__weather">
        <div className="home__header" style={{ background: `url(${img})` }}>
          <div className="home__info">
            <div className="home__temp">
              <div className="home__heading">
                <h1 className="home__h1">{curently.temp}°</h1>
                <h2 className="home__h2">{curently.summary}</h2>
              </div>
              <div className="home__heading2">
                <div className="home__heading2--container">
                  <h3 className="home__h3">HUMIDITY</h3>
                  <h4 className="home__h4">{curently.humidity} %</h4>
                </div>
                <div className="home__heading2--container">
                  <h3 className="home__h3">WIND</h3>
                  <h4 className="home__h4">{curently.wind} K/M</h4>
                </div>
                <div className=""></div>
              </div>
            </div>
            <div className="home__city">
              <h5 className="home__h5">
                {curently.city}
                <div className="home__city--line" />
              </h5>
            </div>
          </div>
          <div className="home__header--border" />
        </div>
        <div className="home__body">
          {daily &&
            daily.data.map((item, index) => {
              if (index < 7) {
                return (
                  <Card
                    key={index}
                    day={moment
                      .unix(item.time)
                      .format("dddd")
                      .slice(0, 3)}
                    summary={item.precipType}
                    temperature={item.temperatureHigh}
                    icon={item.icon}
                  />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  menu: state.menu,
  background: state.background
});

export default connect(mapStateToProps, null)(Home);
