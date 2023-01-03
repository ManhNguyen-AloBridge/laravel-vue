<?php

namespace App\Repositories\Room;

use App\Models\Room;
use App\Repositories\RepositoryAbstract;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class RoomRepository extends RepositoryAbstract implements RoomRepositoryInterface
{
    public function __construct(Room $room)
    {
        $this->model = $room;
    }

    public function getAllInfo(): Collection
    {
        return $this->model
            ->select(DB::raw('
        rooms.id,
        rooms.number,
        users.url_avatar,
        users.name,
        room_prices.floor,
        room_prices.price
        '))
            ->join('users', 'users.room_id', '=', 'rooms.id')
            ->whereNull('users.deleted_at')
            ->join('room_prices', 'room_prices.id', 'rooms.price_id')
            ->whereNull('room_prices.deleted_at')
            ->get();
    }
}
