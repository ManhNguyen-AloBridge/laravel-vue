<?php

namespace App\Services;

use App\Repositories\Receipt\ReceiptRepository;

class ReceiptService
{
    public function __construct(
        protected ReceiptRepository $receiptRepository,
        protected RoomService $roomService,
        protected CostLivingService $costLivingService,
        protected StatisticService $statisticService,
        )
    {

    }

    public function handleCalculate(int $roomId){
        $currentMonth = date('m');
        $beforeMonth = $currentMonth == 1 ? 12 : $currentMonth - 1 ;

        $room = $this->roomService->findById($roomId);
        $costLiving = $this->costLivingService->getData();
        $data = $this->statisticService->handleCalculateStatistic($roomId);

        $total =

        $price = $room->roomPrice;

        dd($data, $price, $costLiving);


    }
}
