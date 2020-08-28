<?php

namespace App\Services\Contracts;

use App\Http\Entities\RegistrationResponseEntity;

/**
 * Interface RegistrationServiceInterface
 * @package App\Services\Contracts
 */
interface RegistrationServiceInterface
{
    /**
     * @param array $payload
     * @return RegistrationResponseEntity|null
     */
    public function register(array $payload): ?RegistrationResponseEntity;
}
