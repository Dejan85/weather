import { useState } from "react";

const useFetchApi = () => {
  const [curently, setCurently] = useState({
    temp: "",
    city: "",
    summary: "",
    humidity: "",
    wind: ""
  });

  const [daily, setDaily] = useState();

  const fetchApi = async (lat, lon) => {
    const proxy = "http://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.darksky.net/forecast/d22fa9ed100532caf997f3f0f7b450dc/${lat},${lon}?units=auto`;
    await fetch(api, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        // console.log(res);
        setCurently({
          temp: Math.round(res.currently.temperature),
          city: res.timezone.split("/")[1],
          summary: res.currently.summary,
          humidity: res.currently.humidity,
          wind: res.currently.windSpeed
        });
        setDaily(res.daily);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return { fetchApi, curently, daily };
};

export default useFetchApi;
