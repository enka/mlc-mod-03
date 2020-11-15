import React from 'react';
import classes from './helloWorld.scss';
import { getEnvironment } from './environment';

const HelloWorld: React.FC = () => (
  <h1
    className={classes.hello}
  >{`Hello World from ${getEnvironment()} environment`}</h1>
);
export default HelloWorld;
