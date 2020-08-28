<?php

use App\Repositories\UserRepository;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder {
    public function run(UserRepository $userRepository) {
        $userRepository->create([
            'login'    => 'user',
            'name'     => 'user',
            'email'    => 'user@gmail.com',
            'password' => Hash::make('user'),
        ]);
    }
}
