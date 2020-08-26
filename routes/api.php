<?php

use Illuminate\Support\Facades\Route;

Route::post('/users/login', 'Auth\LoginController@login')->name('user.login');
Route::post('/users/register', 'Auth\RegisterController@register')->name('user.register');
Route::get('/pizza', 'PizzaController@index');

Route::middleware('auth:api')->group(function () {
    Route::get('/token/validate', 'UserController@getAuthenticatedUser')->name('passport.token.validate');
    Route::get('/users/logout', 'Auth\LoginController@logout')->name('user.logout');
});
