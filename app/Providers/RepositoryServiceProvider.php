<?php

namespace App\Providers;

use App\Models\Order;
use App\Models\Pizza;
use App\Models\User;
use App\Repositories\OrderRepository;
use App\Repositories\PizzaRepository;
use App\Repositories\UserRepository;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider {
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('App\Repositories\UserRepository', function (Application $app) {
            return new UserRepository(
                $app->make(User::class)
            );
        });
        $this->app->singleton('App\Repositories\PizzaRepository', function (Application $app) {
            return new PizzaRepository(
                $app->make(Pizza::class)
            );
        });
        $this->app->singleton('App\Repositories\OrderRepository', function (Application $app) {
            return new OrderRepository(
                $app->make(Order::class)
            );
        });
    }
}
