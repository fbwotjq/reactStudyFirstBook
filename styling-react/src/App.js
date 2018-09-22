import React, { Component } from 'react';
import classNames from 'classnames/bind'
import styles from './App.css';

console.log(styles);
const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = false;
    return (
      //<div className={[styles.box, styles.blue].join(' ')}></div>
      //<div className={cx('box', 'blue')}></div>
      <div className={cx('box', { blue: isBlue})}></div>
    );
  }
}

export default App;
