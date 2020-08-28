<?php

namespace App\Repositories;

use App\Models\Pizza;
use App\Repositories\Contracts\AbstractRepository;

class PizzaRepository extends AbstractRepository
{
    public function __construct(Pizza $pizza)
    {
        parent::__construct($pizza);
    }
}
