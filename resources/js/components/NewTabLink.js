import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '5px',
    paddingBottom: '5px',
    fontSize: '1em',
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
    <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem nodeId="1" label=
          <div className={classes.root}>{prop.name}には
            <a href="#" onClick={handleClick}>
              こちら
            </a>
          </div>>
            <TreeItem nodeId="2" label=
            <div className={classes.root}>{prop.contents}
            </div> />
          </TreeItem>

        </TreeView>
  )
}
/*
<div className={classes.root}>・{prop.name}には
  <a href="#" onClick={handleClick}>
    こちら
  </a>
  {prop.contents}
</div>
*/
