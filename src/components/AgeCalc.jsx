import React, { useState } from "react";
import InputArea from "./InputArea";
import ResultArea from "./ResultArea";

const AgeCalc = () => {
  const [date, setDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  });
  return (
    <div>
      <InputArea date setDate={setDate} />
      <ResultArea date={date} />
    </div>
  );
};

export default AgeCalc;
