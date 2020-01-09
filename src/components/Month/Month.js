import React from 'react';
import Day from '../Day/Day';
import Item from '../Item/Item';
import classNames from 'classnames';
import styles from './Month.module.css';
import {Modal} from 'semantic-ui-react';

const Month = ({ calendar, weekDays, itemValue, year, month, onClickOnDay,closeModalWimdow, setVisible, visible }) => {

  return(
    <div className={styles.wrap}>
      <div className={styles.week}>
        {weekDays.map(weekDay => (
          <div
            key={weekDay}
            className={classNames({
              [styles.week_day]: true,
              [styles.week_day_first]: weekDay === ''
            })}
          >
            { weekDay }
          </div>
        ))}
      </div>
      <div className={classNames({
        [styles.month_wrap]: true,
        [styles.month_wrap_six_weeks]: calendar.length/7 > 5
        })}
      >
        {calendar.map((day, index) => (
          <Day
            day={day}
            key={index.toString() +  day + month + year}
            itemValue={itemValue}
            onClickOnDay={onClickOnDay}
          />
        ))}
      </div>

    </div>
  )
};

export default Month;