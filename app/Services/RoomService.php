<?php

namespace App\Services;

use App\Repositories\Room\RoomRepository;
use Illuminate\Database\Eloquent\Collection;

class RoomService
{
    function __construct(RoomRepository $roomRepository)
    {
        $this->roomRepository = $roomRepository;
    }

    public function getAll():Collection
    {
        return $this->roomRepository->getList();
    }

    public function getAllInfo(){
        return $this->roomRepository->getAllInfo();
    }
}
