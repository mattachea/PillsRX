import React from "react";

function DateTitle() {
  const date = new Date();
  const dayMonth = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <h3>{dayMonth}</h3>;
}

export default DateTitle;
