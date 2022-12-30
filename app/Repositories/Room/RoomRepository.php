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

    public function getAllInfo():Collection
    {
        return $this->model
        ->select(DB::raw('rooms.id, rooms.number, accounts.url_avatar, users.name'))
        ->join('users','users.room_id','=','rooms.id')
        ->whereNull('users.deleted_at')
        ->join('accounts','accounts.id','=','users.account_id')
        ->whereNull('accounts.deleted_at')
        ->get();
    }
}
