import React, { useState } from 'react';
import Day from '../Day/Day';
import { Modal } from 'semantic-ui-react';
import classNames from 'classnames';
import styles from './Item.module.css';

const Item = ({visible, setVisible, onClickOnDay}) => (
  <Modal
    className={classNames({
      [styles.wrap]: true,
      [styles.clicked_wrap]: visible === true
    })}
    open={visible}

  >
    Модальное окно
  </Modal>
);

export default Item;