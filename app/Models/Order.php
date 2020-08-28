<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model {

    protected $fillable = [
        'address',
        'name',
        'email',
        'phone',
    ];

    public function pizzas() {
        return $this->belongsToMany(Pizza::class, OrderPizza::class)->withPivot(['count']);
    }

}
