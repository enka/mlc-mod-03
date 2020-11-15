import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './helloWorld';
import ImgContainer from './imgContainer';
import classes from './mystyles.scss';

ReactDOM.render(
  <div className={classes.app}>
    <HelloWorld />
    <ImgContainer />
  </div>,
  document.getElementById('root')
);
