<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ResetPasswordMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $user;

    public $resetPasswordUrl;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user, string $resetPasswordUrl)
    {
        $this->user = $user;
        $this->resetPasswordUrl = $resetPasswordUrl;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(): Mailable
    {
        return $this->to($this->user->email)
            ->with(['url' => $this->resetPasswordUrl])
            ->view('emails.auth.reset-password');
    }
}
