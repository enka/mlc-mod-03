import React from 'react';
import logoImg from './content/logo_1.png';
import classes from './imgContainer.scss';

const ImgContainer: React.FC = () => (
  <img className={classes.logo} src={logoImg} />
);
export default ImgContainer;
