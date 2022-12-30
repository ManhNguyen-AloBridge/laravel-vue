<?php

namespace App\Services;

use App\Repositories\Account\AccountRepository;

class AccountService
{
    public function __construct(protected AccountRepository $accountRepository)
    {

    }

    public function findByUserId(int $userId){
        dd($userId);

    }
}
