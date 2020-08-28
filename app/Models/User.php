<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable {
    use Notifiable, HasApiTokens;

    protected $fillable = [
        'login',
        'email',
        'password',
        'name',
    ];

    protected $hidden = [
        'password',
    ];

    public function findForPassport($identity) {
        $columnName = filter_var($identity, FILTER_VALIDATE_EMAIL)
            ? 'email' : 'login';
        return $this->where($columnName, $identity)->first();
    }

    public function orders() {
        return $this->belongsToMany(Order::class, OrderUser::class);
    }

}
