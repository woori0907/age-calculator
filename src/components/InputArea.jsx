import React, { useRef } from "react";
import styles from "./InputArea.module.css";

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
      <section className={styles.input_form_wrap}>
        <form onSubmit={handleFormSubmit} className={styles.input_form}>
          <div className={styles.input_field_wrap}>
            <div className={styles.input_field_item}>
              <label htmlFor="input__day">DAY</label>
              <input
                id="input__day"
                type="number"
                placeholder="DD"
                ref={inputDay}
              />
            </div>
            <div className={styles.input_field_item}>
              <label htmlFor="input__month">Month</label>
              <input
                id="input__month"
                type="number"
                placeholder="MM"
                ref={inputMonth}
              />
            </div>
            <div className={styles.input_field_item}>
              <label htmlFor="input__year">YEAR</label>
              <input
                id="input__year"
                type="number"
                placeholder="YEAR"
                ref={inputYear}
              />
            </div>
          </div>
          <input type="submit" value=" " className={styles.input_submit} />
        </form>
      </section>
    </div>
  );
};

export default InputArea;
