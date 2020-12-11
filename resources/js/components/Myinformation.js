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
    marginTop: '3.1%',
    backgroundColor: '#f0f8ff',
    borderTop: '6px solid rgba(0,0,0,.2)',
    borderRadius: '3px',
    marginRight: '11%',
  },
}));


export function MyInfo() {

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}></div>
      <SplitPane split="horizo​​ntal" minSize={50} defaultSize="45%">
          <SplitPane split="vertical" minSize={50} defaultSize="80%" className={classes.body}>
            <MySchool/>
            <Twitter/>
          </SplitPane>

        <div className={classes.rootBtm}></div>
      </SplitPane>
    </div>
  )
}
