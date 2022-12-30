<?php

namespace App\Repositories\Room;

use App\Models\Room;
use App\Repositories\RepositoryAbstract;

class RoomRepository extends RepositoryAbstract implements RoomRepositoryInterface
{
    public function __construct(Room $room)
    {
        $this->model = $room;
    }
}
