<?php

namespace App\Services;

use App\Mail\RegisterUserMail;
use App\Mail\ResetPasswordMail;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Mail\SentMessage;

class MailService
{
    public function sendRegisterUserMail(User $user)
    {
        $mail = new RegisterUserMail($user);

        return Mail::send($mail);
    }

    public function sendResetPasswordMail(User $user, string $url): SentMessage|null
    {
        $mail = new ResetPasswordMail($user, $url);

        return Mail::send($mail);
    }
}
