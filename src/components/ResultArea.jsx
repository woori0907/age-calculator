import React, { useEffect } from "react";

const ResultArea = ({ date }) => {
  const { day, month, year } = date;
  const today = new Date();
  const getAge = () => {
    const temp = new Date(`${year}-${month - 1}-${day}`);
    let rDay = Math.floor((today - temp) / (1000 * 60 * 60 * 24));
    let rMonth = Math.floor(rDay / 30);
    let rYear = Math.floor(rMonth / 12);
    rMonth = rMonth % 12;
    rDay = rDay % 30;

    console.log(temp);
    console.log(today);
    console.log(rYear);
    console.log(rMonth);
    console.log(rDay);
  };
  useEffect(() => {
    getAge();
  }, [date]);
  return (
    <div>
      <p>{year}Years</p>
      <p>{month}Months</p>
      <p>{day}Days</p>
    </div>
  );
};

export default ResultArea;
