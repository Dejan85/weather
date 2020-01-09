import React from "react";

// hooks
import useDate from "../../hooks/global/useDate";

const Date = () => {
  const { currentDate } = useDate();

  return <div className="header__date">{currentDate()}</div>;
};

export default Date;
