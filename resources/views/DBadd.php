<?php
  if(isset($_GET['add'])) {
    $SiteName = $_GET['NAME'];
    $SiteURL=$_GET['URL'];
    $SiteContent=$_GET['CONTENT'];
    $ThisSiteURL='https://suehiro-mypage.herokuapp.com/';
    //$ThisSiteURL='http://localhost:8000/';

    $items=\DB::table('outputinfo')->insert(['name' => $SiteName, 'url' => $SiteURL, 'contents' => $SiteContent]);
    $alert = "<script type='text/javascript'>alert('作品名： ". $SiteName. " 登録しました．');
    window.location.href = '". $ThisSiteURL. "';
    </script>";
      echo $alert;
  }
  if(isset($_GET['remove'])) {
    $SiteName = $_GET['NAME'];
    $SiteURL=$_GET['URL'];
    $ThisSiteURL='https://suehiro-mypage.herokuapp.com/';
    //$ThisSiteURL='http://localhost:8000/';

    $items=\DB::table('outputinfo')->where([['name',$SiteName]])->delete();
    $alert = "<script type='text/javascript'>alert('作品名： ". $SiteName. " 削除しました．');
    window.location.href = '". $ThisSiteURL. "';
    </script>";
      echo $alert;
  }

?>
