<?php

namespace App\Repositories\CostLiving;

use App\Models\CostLiving;
use App\Repositories\RepositoryAbstract;

class CostLivingRepository extends RepositoryAbstract implements CostLivingRepositoryInterface
{
    public function __construct(CostLiving $costLiving)
    {
        $this->model = $costLiving;
    }
}
