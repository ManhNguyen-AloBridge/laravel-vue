<?php

namespace App\Repositories\Receipt;

use App\Models\Receipt;
use App\Repositories\RepositoryAbstract;

class ReceiptRepository extends RepositoryAbstract implements ReceiptRepositoryInterface
{
    public function __construct(Receipt $receipt)
    {
        $this->model = $receipt;
    }
}
