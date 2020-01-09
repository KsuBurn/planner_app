import React from 'react';
import styles from './Day.module.css';

const Day = ({ day, itemValue, onClickOnDay }) => {
  return (
    <div className={styles.wrap}>
      <div>{ day }</div>
      <div
        className={styles.deals}
        contentEditable={false}
        onClick={() => onClickOnDay()}
      >
        {itemValue}
      </div>
    </div>
  )
};

export default Day;