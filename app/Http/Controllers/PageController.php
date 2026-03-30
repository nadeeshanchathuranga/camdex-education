<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class PageController extends Controller
{
    public function index(): View
    {
        return view('app', ['page' => 'index']);
    }

    public function about(): View
    {
        return view('app', ['page' => 'about']);
    }
}
