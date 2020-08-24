<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'login' => 'laravel',
            'name' => 'name',
            'email' => 'laravel@gmail.com',
            'password' => Hash::make('password'),
        ]);
        DB::table('users')->insert([
            'login' => 'laravelos',
            'name' => 'name',
            'email' => 'laravelos@gmail.com',
            'password' => Hash::make('laravelos'),
        ]);
    }
}
