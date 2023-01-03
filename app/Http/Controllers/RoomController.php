<?php

namespace App\Http\Controllers;

use App\Services\RoomService;

class RoomController extends Controller
{
    public function __construct(protected RoomService $roomService)
    {

    }

    public function index()
    {
        $listInfoRoom = $this->roomService->getAllInfo();

        return view('pages.room.index',['listInfoRoom' => $listInfoRoom]);
    }
}
