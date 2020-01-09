const useDate = () => {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const currentDate = () => {
    return `${days[date.getDay()]}, ${date.getDate()}th ${
      months[date.getMonth()]
    }`;
    // ${date.getFullYear()}.
  };

  return {
    currentDate
  };
};

export default useDate;
