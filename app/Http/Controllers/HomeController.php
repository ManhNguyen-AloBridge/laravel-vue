<?php

namespace App\Http\Controllers;

use App\Services\AccountService;
use App\Services\RoomService;
use App\Services\UserService;
use Illuminate\Contracts\View\View;

class HomeController extends Controller
{
    public function __construct(
        protected RoomService $roomService,
        protected UserService $userService,
        protected AccountService $accountService
        )
    {
        // $this->roomService = $roomService;
    }

    public function index(): View
    {
        $listInfoRoom = $this->roomService->getAllInfo();

        // dd($listRoom);

        return view(
            'home',
            [
                'listInfo' => $listInfoRoom
            ]
        );
    }
}
