<?php

namespace App\Services;

use App\Models\CostLiving;
use App\Repositories\CostLiving\CostLivingRepository;

class CostLivingService
{
    public function __construct(protected CostLivingRepository $costLivingRepository)
    {

    }

    public function getData():CostLiving{
        return $this->costLivingRepository->getList()->first();
    }
}
