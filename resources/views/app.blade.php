<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="//fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="css/stylesheet.css" rel="stylesheet">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>

  <?php
    include "../resources/views/DBadd.php";
?>

<div class="DBcontrol">
  <form action="app.blade.php" method="get">
  <div>
    <input type="text" name="NAME" placeholder="作品名"></input>
    <input type="text" name="URL" placeholder="URL"></input>
  </div>
  <div class="BtnControl">
    <button type="submit" name="add">登録</button>
    <button type="submit" name="remove">削除</button>
  </div>
  </form>
</div>

    <?php
    include "../resources/views/DBget.php";
    ?>
    <div id="appi"></div>
    <script>
      let siteData = <?php echo $php_json?>;
    </script>
    <script type="text/javascript" src="../resources/js/components/App.js"></script>

</body>
</html>
