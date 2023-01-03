<?php

namespace App\Repositories\Statistic;

use App\Models\Statistic;
use App\Repositories\RepositoryAbstract;

class StatisticRepository extends RepositoryAbstract implements StatisticRepositoryInterface
{
    public function __construct(Statistic $statistic)
    {
        $this->model = $statistic;
    }

    public function findByRoomIdAndMonth(int $roomId, int $month):?Statistic{
        return $this->model
        ->where('month',$month)
        ->where('room_id',$roomId)
        ->first();
    }
}
