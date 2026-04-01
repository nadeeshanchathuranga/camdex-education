<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class PageController extends Controller
{
    public function Index(): View
    {
        return view('app', ['page' => 'index']);
    }

    public function About(): View
    {
        return view('app', ['page' => 'about']);
    }

   public function Instructor(): View
    {
        return view('app', ['page' => 'instructor']);
    }

    public function ClassFees(): View
    {
        return view('app', ['page' => 'class-fees']);
    }


}
