const useFetchApi = () => {
  const fetchApi = (lat, lon) => {
    const proxy = "http://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.darksky.net/forecast/d22fa9ed100532caf997f3f0f7b450dc/${lat},${lon}`;
    fetch(api, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return { fetchApi };
};

export default useFetchApi;
