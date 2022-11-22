<?php

namespace App\Repositories\PasswordReset;

interface PasswordResetRepositoryInterface
{
    public function insert(array $data): bool;

    public function deleteByConditions(array $conditions): bool;
}
