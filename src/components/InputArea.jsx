import React, { useRef } from "react";

const InputArea = ({ date, setDate }) => {
  const inputDay = useRef();
  const inputMonth = useRef();
  const inputYear = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let tempDate = { ...date };

    tempDate = {
      day: inputDay.current.value
        ? inputDay.current.value
        : inputDay.current.classList.add("invalid"),
      month: inputMonth.current.value
        ? inputMonth.current.value
        : inputMonth.current.classList.add("invalid"),
      year: inputYear.current.value
        ? inputYear.current.value
        : inputYear.current.classList.add("invalid"),
    };
    if ((tempDate.day, tempDate.month, tempDate.year !== undefined)) {
      setDate(tempDate);
    }
  };
  return (
    <div>
      <section>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="input__day">DAY</label>
          <input
            id="input__day"
            type="number"
            placeholder="DD"
            ref={inputDay}
          />

          <label htmlFor="input__month">Month</label>
          <input
            id="input__month"
            type="number"
            placeholder="MM"
            ref={inputMonth}
          />

          <label htmlFor="input__year">YEAR</label>
          <input
            id="input__year"
            type="number"
            placeholder="YEAR"
            ref={inputYear}
          />
          <input type="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
};

export default InputArea;
