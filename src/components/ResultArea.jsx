import React, { useEffect, useState } from "react";

const ResultArea = ({ date }) => {
  const { day, month, year } = date;
  const today = new Date();
  let [rDay, setDay] = useState(0);
  let [rMonth, setMonth] = useState(0);
  let [rYear, setYear] = useState(0);
  const getAge = () => {
    const temp = new Date(`${year}-${month - 1}-${day}`);
    let tDay = Math.floor((today - temp) / (1000 * 60 * 60 * 24));
    let tMonth = Math.floor(tDay / 30);
    let tYear = Math.floor(tMonth / 12);
    tMonth = tMonth % 12;
    tDay = tDay % 30;

    setDay(tDay);
    setMonth(tMonth);
    setYear(tYear);
    
  };
  console.log(isNaN(rYear))
  useEffect(() => {
    getAge();
  }, [date]);
  return (
    <div>
      <p>{isNaN(rYear) ? '--' : rYear}Years</p>
      <p>{isNaN(rMonth) ? '--' : rMonth}Months</p>
      <p>{isNaN(rDay) ? '--' : rDay}Days</p>
    </div>
  );
};

export default ResultArea;
