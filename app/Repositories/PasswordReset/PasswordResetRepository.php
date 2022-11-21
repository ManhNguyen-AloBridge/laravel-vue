<?php

namespace App\Repositories\PasswordReset;

use Illuminate\Support\Facades\DB;

class PasswordResetRepository implements PasswordResetRepositoryInterface
{
    public function insert(array $data): bool
    {
        return DB::table('password_resets')->insert($data);
    }

    public function deleteByConditions(array $conditions): bool
    {
        return DB::table('password_resets')->where($conditions)->delete();
    }
}
