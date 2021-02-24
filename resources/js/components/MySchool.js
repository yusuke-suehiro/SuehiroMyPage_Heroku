import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {NewTabLink} from "./NewTabLink.js";

const useStyles = makeStyles({
    school: {
      textAlign: 'left',
      paddingTop: '3%',
      marginLeft: '1%'
    },
    top: {
      textAlign: 'left',
      paddingTop: '1%',
      marginLeft: '1%'
    }
});

export function MySchool() {

  const classes=useStyles();

  return (
    <div>
      <h2 className={classes.top}>
        学歴
      </h2>
      <div className={classes.school}>
        横浜翠嵐高等学校
      </div>
      <div className={classes.school}>
        横浜国立大学 理工学部 数物・電子情報系学科
      </div>
      <div className={classes.school}>
        電子情報システムEP 島研究室
      </div>
      <div className={classes.school}>
        <NewTabLink name='島研究室' url='http://www.bmer.ynu.ac.jp/' contents="リハビリテーショングループ所属"/>
      </div>
    </div>
  );
}
