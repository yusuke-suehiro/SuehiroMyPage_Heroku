import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    borderTop: '6px solid rgba(0,0,0,.2)',
    borderRadius: '3px',
  },
  TopMessage: {
    paddingTop: '1%',
    //backgroundColor: '#e6e6fa',
  },
  BottomMessage: {
    paddingBottom: '1%',
  },
  OneMessage: {
    marginTop: '1%',
    paddingBottom: '1%',
  },
  backColor: {
  backgroundColor: '#f0f8ff',
  },
  leftMargin: {
    marginLeft: '1%'
  }
}));

export function Home() {

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}></div>
      <div className={classes.backColor}>
      <div className={classes.leftMargin}>
        <div className={classes.TopMessage}>こんにちは，すえひろです！</div>
        <div className={classes.BottomMessage}>自分のホームページなのでゆる〜く作っています！どうぞよろしくお願いします(^ ▽ ^)</div>

        <div className={classes.TopMessage}>右上のテキストボックスに作品名とURLを入れると「登録」を押すと作品タブに作品が追加されます．</div>
        <div className={classes.BottomMessage}>また，作品名とURLを入れて「削除」を押すと作品タブの入力した作品が削除されます．</div>

        <div className={classes.TopMessage}>作る上でこだわったポイントは，自分の作品をデータベースで管理しているところです．</div>
        <div>作品を作って作品が増えたときには，アプリケーションから追加できるようにしました．</div>
        <div>また，入力を間違えた場合などに対応するために削除する機能も追加しました．</div>
        <div className={classes.BottomMessage}>しかし，javascriptからDBへの接続方法が分からず，テキストボックスベタばりになってしまったので改善したいです．．．</div>

        <div className={classes.TopMessage}>また，今回はデザインにも力を入れてみました．</div>
        <div>DBの接続がうまくいけばもっとスタイリッシュになったのに．．．と残念です．</div>
        <div className={classes.BottomMessage}>デザインについては勉強したことがないので，勉強してみたいと感じました．</div>

      <div className={classes.OneMessage}>新しい作品を作ったりしたときには随時更新していきたいと思ってますので，よろしくお願いします！</div>
      </div>
      </div>
      <div className={classes.root}></div>

    </div>
  )
}
