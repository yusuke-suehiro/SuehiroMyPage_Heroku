<?php
//namespace App\Http\Controllers;
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\siteinfo;

class TestController extends Controller
{
  public function func() {
    $user = new User;
    $value = $user->find(1);
    $arr = ['Snome1', 'Snome2', 'Snome3'];
    return view('sample', compact('value', 'arr'));
  }
}
