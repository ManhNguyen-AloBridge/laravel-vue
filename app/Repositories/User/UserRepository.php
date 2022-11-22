<?php

namespace App\Repositories\User;

use App\Models\User;
use App\Repositories\RepositoryAbstract;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Illuminate\Pagination\LengthAwarePaginator;

class UserRepository extends RepositoryAbstract implements UserRepositoryInterface
{
    public function __construct(User $user)
    {
        $this->model = $user;
    }

    public function list(array $conditions, int|string $page, int|string $perPage): LengthAwarePaginator|null
    {
        $query = $this->buildWhereLike($conditions);

        $result = $query->paginate($perPage);

        return $result;
    }

    public function update(Model|Builder $model, array $data): int|bool
    {
        if (! empty($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        }

        return $model->update($data);
    }

    public function updateByConditions(array $conditions, array $update): int|bool
    {
        $query = $this->buildWhere($conditions);
        if (! empty($update['password'])) {
            $update['password'] = Hash::make($update['password']);
        }
        $user = $this->update($query, $update);

        return $user;
    }

    public function findByConditions(array $conditions, bool $first = false, bool $toArray = false): Model|Collection|array|null
    {
        $query = $this->buildWhere($conditions);
        $result = $first ? $this->getFirst($query, $toArray) : $this->getList($query, $toArray);

        return $result;
    }
}
