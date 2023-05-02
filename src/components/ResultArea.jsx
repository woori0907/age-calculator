import React, { useEffect, useState } from "react";
import styles from "./ResultArea.module.css";

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
  useEffect(() => {
    getAge();
  }, [date]);
  return (
    <div className={styles.result_wrap}>
      <p className={styles.result_text}>
        <i>
          <span className={styles.result_value}>
            {isNaN(rYear) ? "--" : rYear}
          </span>
          &nbsp;years
        </i>
      </p>
      <p className={styles.result_text}>
        <i>
          <span className={styles.result_value}>
            {isNaN(rMonth) ? "--" : rMonth}
          </span>
          &nbsp;months
        </i>
      </p>
      <p className={styles.result_text}>
        <i>
          <span className={styles.result_value}>
            {isNaN(rDay) ? "--" : rDay}
          </span>
          &nbsp;days
        </i>
      </p>
    </div>
  );
};

export default ResultArea;
