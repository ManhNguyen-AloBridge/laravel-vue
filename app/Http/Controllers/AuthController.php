<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function __construct()
    {
    }

    public function login(Request $request): RedirectResponse
    {
        $credential = $request->only([
            'email',
            'password'
        ]);

        if (!Auth::attempt($credential)) {
            return redirect()->back()->withInput()->with('message', 'Email or password incorrect');
        }

        return redirect('room.list');
    }

    public function logout(): RedirectResponse
    {
        if (Auth::check()) {
            Auth::logout();
        }

        return redirect('login');
    }
}
