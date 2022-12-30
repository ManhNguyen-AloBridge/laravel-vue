<?php

namespace App\Http\Controllers;

use App\Services\RoomService;
use App\Services\UserService;
use Illuminate\Contracts\View\View;

class HomeController extends Controller
{
    public function __construct(
        protected RoomService $roomService,
        protected UserService $userService
        )
    {
        // $this->roomService = $roomService;
    }

    public function index(): View
    {
        $listRoom = $this->roomService->getAll();
        $listUser = $this->userService->getAll();

        return view(
            'home',
            [
                'listRoom' => $listRoom
            ]
        );
    }
}
