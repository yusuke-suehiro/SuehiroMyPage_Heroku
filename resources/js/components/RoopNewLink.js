import React from 'react'
import {NewTabLink} from "./NewTabLink.js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    borderTop: '6px solid rgba(0,0,0,.2)',
    borderRadius: '3px',
  },
  backColor: {
    backgroundColor: '#f0f8ff',
  },
  leftMargin: {
    marginLeft: '1%'
  }
}));

const YourLink =siteData;
//const YourLink =[['シフト管理システム（自作）','http://miosche0936.php.xdomain.jp'],['gmail-visualizer（ハッカソン）','https://gmail-visualizer.herokuapp.com/']];



export function RoopNewLink() {

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}></div>
      <div className={classes.backColor}>
      <div className={classes.leftMargin}>
        <React.Fragment>
          {YourLink.map((OutputNum) => (
            <NewTabLink key={OutputNum} name={OutputNum[0]} url={OutputNum[1]}/>
          ))}
        </React.Fragment>
      </div>
      </div>
      <div className={classes.root}></div>
    </div>
  )
}
