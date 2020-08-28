<?php

use App\Models\Order;
use App\Models\User;
use App\Repositories\OrderRepository;
use App\Repositories\PizzaRepository;
use Illuminate\Database\Seeder;

class OrderTableSeeder extends Seeder {
    public function run(OrderRepository $orderRepository, PizzaRepository $pizzaRepository) {
        $pizzas = $pizzaRepository->get()->pluck('id')->toArray();
        factory(Order::class, 5)->create()->each(function (Order $order) use ($pizzas) {
            $orderPizza = [];
            $count = rand(1, 5);
            for ($i = 0; $i < $count; $i++) {
                $index = array_rand($pizzas);
                $orderPizza[$pizzas[$index]] = ['count' => rand(1, 5)];
            }
            $order->pizzas()->attach($orderPizza);
            User::first()->orders()->attach($order);
        });
    }
}
