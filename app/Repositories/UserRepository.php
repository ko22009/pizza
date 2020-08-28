<?php

namespace App\Repositories;

use App\Models\User;
use App\Repositories\Contracts\AbstractRepository;

class UserRepository extends AbstractRepository
{
    public function __construct(User $user)
    {
        parent::__construct($user);
    }
}
