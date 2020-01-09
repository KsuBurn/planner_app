import React, { useState } from 'react';
import ReactModal, {Modal} from 'react-modal';
import Month from '../Month/Month';
import styles from './Todo.module.css';
import classNames from 'classnames';


const Todo = ({ calender }) => {
  const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const monthName = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь'
  };
  const [year, setYear] = useState(new Date().getFullYear()),
        [month, setMonth] = useState((new Date().getMonth())),
        [itemValue, setItemValue] = useState(''),
        [visible, setVisible] = useState(false);

  const calendar = () => {
    let monthDays = [];
    const lastDay = new Date(year,month + 1,0).getDate();
    const firstWeekDay = new Date(year, month, 1).getDay();

    for(let i = 1; i <= lastDay; i++){
      monthDays.push(i);
    };

    if(firstWeekDay === 0) {
      for (let i = 0; i < 6; i++) {
        monthDays.unshift('');
      };
    } else {
      for (let i = 1; i < firstWeekDay; i++) {
        monthDays.unshift('');
      };
    };
    return monthDays;
  };

  const onClickOnDay = () => {
    return setVisible(true);
  };

  const closeModalWimdow = () => {
    return setVisible(false);
  };

  console.log(visible);
  return(
    <div className={classNames({
      [styles.wrap]: true,
      [styles.overlay_modal_opened]: visible === true
    })}
    >
      <div className={styles.month_change}>
        <input
          type='button'
          onClick={() => setMonth(month - 1)}
        />
        <input
          type='button'
          onClick={() => setMonth(month + 1)}
        />
        <h2>{ monthName[month] } {year}</h2>
      </div>
      <Month
        calendar={calendar()}
        weekDays={weekDays}
        itemValue={itemValue}
        year={year}
        month={month}
        onClickOnDay={onClickOnDay}
        closeModalWimdow={closeModalWimdow}
        visible={visible}
        setVisible={setVisible}

      />
      <div className={styles.sidebar}>sidebar </div>
      <ReactModal
        overlayClassName={styles.overlay_modal}
        className={styles.modal}
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        ariaHideApp={false}
      >
        <input type='text'/>
        <input type='button'/>
      </ReactModal>
    </div>
  )
};

export default Todo;