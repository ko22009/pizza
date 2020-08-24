<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'InitialController@init');

Route::group(['middleware' => 'web'], function () {
    Route::get('api/documentation', '\L5Swagger\Http\Controllers\SwaggerController@api')->name('l5swagger.api');
});

