<?php

namespace App\Http\Controllers;

use App\Services\RoomService;
use App\Services\UserService;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;

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
        $listInfoRoom = $this->roomService->getAllInfo();

        return view(
            'home',
            [
                'listInfo' => $listInfoRoom ?? new Collection()
            ]
        );
    }
}
