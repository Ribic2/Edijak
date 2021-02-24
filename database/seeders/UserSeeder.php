<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            "name" => "Vid",
            "surname" => "Bukovec",
            "email" => "vid.bukovec@sestg.sc-nm.si",
            "password" => Hash::make("test"),
            "nameAndSurname" => "V. Bukovec",
            "groupId" => 36
        ]);
    }
}
