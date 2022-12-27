<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Google\Client;
use Google\Service\Drive;

class StatisticController extends Controller
{
    public function __construct()
    {
    }

    public function store(Request $request)
    {

        if ($request->file('image')) {
            $file = $request->file('image');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            dd($file->getClientOriginalName());
            $file->move(public_path('public/Image'), $filename);
            $data['image'] = $filename;
        }
    }

}
