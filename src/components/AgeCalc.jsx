import React, { useState } from "react";
import InputArea from "./InputArea";
import ResultArea from "./ResultArea";
import styles from "./AgeCalc.module.css";

const AgeCalc = () => {
  const [date, setDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  });
  return (
    <div className={styles.calc_wrap}>
      <InputArea date setDate={setDate} />
      <ResultArea date={date} />
    </div>
  );
};

export default AgeCalc;
