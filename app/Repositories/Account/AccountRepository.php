<?php

namespace App\Repositories\Account;

use App\Models\Account;
use App\Repositories\RepositoryAbstract;

class AccountRepository extends RepositoryAbstract implements AccountRepositoryInterface
{
    public function __construct(Account $account)
    {
        $this->model = $account;
    }

}
