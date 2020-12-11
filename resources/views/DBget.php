<?php
//\DB::table('test')->insert(['sitename' => 'Flight 10', 'url' => 'https://www.sejuku.net/blog/104042']);
$items=\DB::table('test')->get();
$datanum=$items->count();
$siteData=array();

for($num=0;$num<$datanum;$num++) {
  $tmp_array=array($items[$num]->sitename, $items[$num]->url);
  array_push($siteData,$tmp_array);
}
$php_json = json_encode($siteData);
?>
