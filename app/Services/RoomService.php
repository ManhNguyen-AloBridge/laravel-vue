<?php

namespace App\Services;

use App\Repositories\Room\RoomRepository;
use Illuminate\Database\Eloquent\Collection;

class RoomService
{
    function __construct(protected RoomRepository $roomRepository)
    {
    }

    public function findById(int $roomId){
        return $this->roomRepository->find($roomId);
    }

    public function getAll():Collection
    {
        return $this->roomRepository->getList();
    }

    public function getAllInfo(){
        return $this->roomRepository->getAllInfo();
    }
}
