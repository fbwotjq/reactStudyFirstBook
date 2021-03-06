import React, { Component } from 'react';
import classNames from 'classnames/bind'
//import styles from './App.css';
import styles from './App.scss';
//import Button from './components/Button';
import StyledButton from './components/Button/StyledButton';

console.log(styles);
const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = true;
    return (
      //<div className={[styles.box, styles.blue].join(' ')}></div>
      //<div className={cx('box', 'blue')}></div>
      <div className={cx('box', { blue: isBlue })}>
        <div className={cx('box-inside')}></div>
        {/*<Button>버튼</Button> */}
        <StyledButton big={true}>버튼</StyledButton>
      </div>
    );
  }
}

export default App;