<?php

/** @var Factory $factory */

use App\Models\Order;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Order::class, function (Faker $faker) {
    return [
        'address' => $faker->address,
        'name'    => $faker->name,
        'email'   => $faker->email,
        'phone'   => $faker->phoneNumber,
    ];
});
