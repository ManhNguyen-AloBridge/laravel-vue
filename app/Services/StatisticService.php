<?php

namespace App\Services;

use App\Models\Statistic;
use App\Repositories\Statistic\StatisticRepository;

class StatisticService
{
    public function __construct(protected StatisticRepository $statisticRepository)
    {

    }

    public function getRecordByRoomIdAndMonth(int $roomId, int $month): ?Statistic{
        return $this->statisticRepository->findByRoomIdAndMonth($roomId, $month);
    }

    public function handleCalculateStatistic($roomId){
        $currentMonth = date('m');
        $beforeMonth = $currentMonth == 1 ? 12 : $currentMonth - 1 ;

        $costLivingCurrentMonth = $this->getRecordByRoomIdAndMonth($roomId, $currentMonth);
        $costLivingBeforeMonth = $this->getRecordByRoomIdAndMonth($roomId, $beforeMonth);

        return [
            'electric_number' => $costLivingCurrentMonth->electric_number - $costLivingBeforeMonth->electric_number,
            'water_number' => $costLivingCurrentMonth->water_number - $costLivingBeforeMonth->water_number,
        ];
    }
}
