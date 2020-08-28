<?php

namespace App\Repositories;

use App\Models\Order;
use App\Repositories\Contracts\AbstractRepository;

class OrderRepository extends AbstractRepository {
    public function __construct(Order $order) {
        parent::__construct($order);
    }
}
