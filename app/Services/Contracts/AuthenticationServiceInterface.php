<?php

namespace App\Services\Contracts;

use App\Http\Entities\LoginResponseEntity;

/**
 * Interface AuthenticationServiceInterface
 * @package App\Services\Contracts
 */
interface AuthenticationServiceInterface
{
    /**
     * @param string $login
     * @param string $password
     * @return LoginResponseEntity|null
     */
    public function login(string $login, string $password): ?LoginResponseEntity;

    /**
     * @return array
     */
    public function logout(): array;
}
