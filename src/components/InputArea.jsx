import React, { useRef } from "react";
import styles from "./InputArea.module.css";

const InputArea = ({ date, setDate }) => {
  const inputDay = useRef();
  const inputMonth = useRef();
  const inputYear = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let tempDate = { ...date };
    console.log(inputYear.current);
    tempDate = {
      day: inputDay.current.value
        ? inputDay.current.value
        : inputDay.current.classList.add(styles.invalid),
      month: inputMonth.current.value
        ? inputMonth.current.value
        : inputMonth.current.classList.add(styles.invalid),
      year: inputYear.current.value
        ? inputYear.current.value
        : inputYear.current.classList.add(styles.invalid),
    };
    if ((tempDate.day, tempDate.month, tempDate.year !== undefined)) {
      setDate(tempDate);
    }
  };

  const validationCheck = (e) => {
    /** 1. 지금보다 이후 날짜라면
     * 2. 가능하지 않은 날짜라면(ex. 4월 31일)
     * 에러메세지 리턴하기
     */
    e.preventDefault();
    const curdate = new Date(
      Number(inputYear.current.value),
      Number(inputMonth.current.value - 1),
      Number(inputDay.current.value)
    );
    console.log(curdate.getFullYear(), curdate.getMonth(), curdate.getDate());
    if (
      curdate.getFullYear() == inputYear.current.value &&
      curdate.getMonth() + 1 == inputMonth.current.value &&
      curdate.getDate() == inputDay.current.value
    ) {
      inputYear.current.classList.remove(styles.invalid);
      inputMonth.current.classList.remove(styles.invalid);
      inputDay.current.classList.remove(styles.invalid);
      inputYear.current.nextSibling.classList.remove(styles.visible);
      inputMonth.current.nextSibling.classList.remove(styles.visible);
      inputDay.current.nextSibling.classList.remove(styles.visible);
      handleFormSubmit(e);
    } else {
      if (curdate.getFullYear() != inputYear.current.value) {
        inputYear.current.classList.add(styles.invalid);
        inputYear.current.nextSibling.classList.add(styles.visible);
      }
      if (curdate.getMonth() + 1 != inputMonth.current.value) {
        inputMonth.current.classList.add(styles.invalid);
        inputMonth.current.nextSibling.classList.add(styles.visible);
      }
      if (curdate.getDate() != inputDay.current.value) {
        inputDay.current.classList.add(styles.invalid);
        inputDay.current.nextSibling.classList.add(styles.visible);
      }
    }
  };

  return (
    <div>
      <section className={styles.input_form_wrap}>
        <form onSubmit={validationCheck} className={styles.input_form}>
          <div className={styles.input_field_wrap}>
            <div className={styles.input_field_item}>
              <label htmlFor="input__day">DAY</label>
              <input
                id="input__day"
                type="number"
                placeholder="DD"
                ref={inputDay}
              />
              <i className={styles.alert_msg}>Must be a valid day</i>
            </div>
            <div className={styles.input_field_item}>
              <label htmlFor="input__month">Month</label>
              <input
                id="input__month"
                type="number"
                placeholder="MM"
                ref={inputMonth}
              />
              <i className={styles.alert_msg}>Must be a valid month</i>
            </div>
            <div className={styles.input_field_item}>
              <label htmlFor="input__year">YEAR</label>
              <input
                id="input__year"
                type="number"
                placeholder="YEAR"
                ref={inputYear}
              />
              <i className={styles.alert_msg}>Must be a valid year</i>
            </div>
          </div>
          <input type="submit" value=" " className={styles.input_submit} />
        </form>
      </section>
    </div>
  );
};

export default InputArea;
