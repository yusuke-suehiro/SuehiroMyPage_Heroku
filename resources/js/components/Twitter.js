import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    twitter: {
      textAlign: 'center',
      margin: '2%',
    },
    message: {
      textAlign: 'center',
      margin: '2%',
    },
    design: {
      border: '3px solid rgba(0,0,0,.2)',
      borderRadius: 30,
      marginTop: '10%',
      marginRight: '10%',
      backgroundColor: 'white'
    },

});

export function Twitter() {

  const classes=useStyles();

  return (
    <div className={classes.backColor}>
    <div className={classes.design}>
      <div className={classes.twitter}>
        <a href="https://twitter.com/sue0616" target="_blank" rel="noopener noreferrer">
          <img src="./image/TwitterLogo.png" border="0" width="60%" alt="Twitterアカウント" title="鍵アカなのでフォロリク送ってね"/>
        </a>
      </div>
      <div className={classes.message}>
        ※Twitterアカウント
      </div>
    </div>
    </div>
  )
}
