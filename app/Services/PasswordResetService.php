<?php

namespace App\Services;

use App\Repositories\PasswordReset\PasswordResetRepositoryInterface;

class PasswordResetService
{
    public function __construct(protected PasswordResetRepositoryInterface $passwordResetRepository)
    {
    }

    public function insert($data): bool
    {
        return $this->passwordResetRepository->insert($data);
    }

    public function deleteByConditions($conditions): bool
    {
        return $this->passwordResetRepository->deleteByConditions($conditions);
    }
}
