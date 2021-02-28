import React from 'react';
import SplitPane from 'react-split-pane';
import {Twitter} from "./Twitter.js";
import { makeStyles } from '@material-ui/core/styles';
import {MySchool} from "./MySchool.js";

const useStyles = makeStyles(() => ({
  body: {
    marginTop: '40px',
    marginRight: '11%',
    backgroundColor: '#f0f8ff',
  },
  root: {
    borderTop: '6px solid rgba(0,0,0,.2)',
    borderRadius: '3px',
  },
  rootBtm: {
    backgroundColor: '#f0f8ff',
    borderTop: '6px solid rgba(0,0,0,.2)',
    borderRadius: '3px',
  },
  back: {
    backgroundColor: '#f0f8ff',
  }
}));


export function MyInfo() {

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}></div>
        <div className={classes.back}>
            <MySchool/>
            <Twitter/>
        </div>
      <div className={classes.rootBtm}></div>
    </div>
  )
}
