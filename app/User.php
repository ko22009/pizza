<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable,HasApiTokens;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'login', 'email', 'password', 'name'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password'
    ];

    /**
     * Laravel passport - identity custom column selection
     *
     * @var string
     * @return User
     */
    public function findForPassport($identity) {
        $columnName = filter_var($identity, FILTER_VALIDATE_EMAIL)
            ? 'email' : 'login';
        return $this->where($columnName, $identity)->first();
    }

}
