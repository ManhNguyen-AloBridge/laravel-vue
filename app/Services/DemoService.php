<?php

namespace App\Services;

use App\Mail\Demo;
use Illuminate\Support\Facades\Mail;

class DemoService
{
    public function sendToMail(string $email){

        // dd(config('mail.from.address'),$email);
        dd(Mail::to($email)->send(new Demo(config('mail.from.address'))));
    }
}
