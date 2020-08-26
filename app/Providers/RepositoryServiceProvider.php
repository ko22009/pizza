<?php

namespace App\Providers;

use App\Pizza;
use App\Repositories\PizzaRepository;
use App\Repositories\UserRepository;
use App\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
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
    }
}
