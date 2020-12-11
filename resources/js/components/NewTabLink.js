import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '5px',
    paddingBottom: '5px',
  },
}));


export function NewTabLink(prop) {
  const classes = useStyles();

  function handleClick(e) {
    e.preventDefault();
    const url=prop.url;
    window.open(url, '_blank')
  }

  return (
    <div className={classes.root}>・{prop.name}には
      <a href="#" onClick={handleClick}>
        こちら
      </a>
    </div>
  )
}
