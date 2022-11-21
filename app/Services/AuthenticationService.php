<?php

namespace App\Services;

class AuthenticationService
{
    public function authenticate($credentials, $remember = false): bool
    {
        return auth()->attempt($credentials, $remember);
    }
}
