<?php

namespace App\Repositories\User;

use App\Repositories\RepositoryInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

interface UserRepositoryInterface extends RepositoryInterface
{
    public function list(array $conditions, int|string $page, int|string $perPage): LengthAwarePaginator|null;

    public function updateByConditions(array $conditions, array $update): int|bool;

    public function findByConditions(array $conditions, bool $first = false, bool $toArray = false): Model|Collection|array|null;
}
