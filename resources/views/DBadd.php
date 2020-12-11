<?php
  if(isset($_GET['add'])) {
    $SiteName = $_GET['NAME'];
    $SiteURL=$_GET['URL'];
    $ThisSiteURL='http://localhost:8000/';

    $items=\DB::table('test')->insert(['sitename' => $SiteName, 'url' => $SiteURL]);
    $alert = "<script type='text/javascript'>alert('作品名： ". $SiteName. " URL: ". $SiteURL. " 登録しました．');
    window.location.href = '". $ThisSiteURL. "';
    </script>";
      echo $alert;
  }
  if(isset($_GET['remove'])) {
    $SiteName = $_GET['NAME'];
    $SiteURL=$_GET['URL'];
    $ThisSiteURL='http://localhost:8000/';

    $items=\DB::table('test')->where([['sitename',$SiteName],['url',$SiteURL]])->delete();
    $alert = "<script type='text/javascript'>alert('作品名： ". $SiteName. " URL: ". $SiteURL. " 削除しました．');
    window.location.href = '". $ThisSiteURL. "';
    </script>";
      echo $alert;
  }

?>
